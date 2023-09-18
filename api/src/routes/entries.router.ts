import express, {Response} from "express";
import {AuthRequest} from "@middleware/auth";
import { EntryRepo, LogRepo, UserRepo } from "@repos";
import { Entry, Log, User } from "@entities";

export const EntryRouter = express.Router();

// EntryRouter.get("/", async (req: AuthRequest, res: Response) => {
//     const entries = await EntryRepo.find({
//         relations: {
//             log: {
//                 book: true,
//                 user: true
//             }
//         }
//     })
//     res.status(200).send(entries);
// })


// EntryRouter.delete("/:id", async (req: AuthRequest, res: Response) => {
//     const resp = await EntryRepo.delete({
//             id: parseInt(req.params.id)
//         })
//     res.send("did it")
    
// })

EntryRouter.get("/timeline", async (req: AuthRequest, res: Response) => {
    try {
        const results = await getTimeline(req.token.id as string);
        res.status(200).send(results);
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
})

// EntryRouter.post("/test", async (req: AuthRequest, res: Response) => {
//     console.log(req.body)
//     res.end();
// });

EntryRouter.post("/new", async (req: AuthRequest, res: Response) => {
    try {
        const result = await newPost(req);
        res.send({ok: result});
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
})

// Timeline Code {
async function getTimeline(token: string) {
    let user = await UserRepo.findOne({
        relations: {
            logs: true
        },
        where: {
            id: token
    }   });

    if (!user) {throw Error("Could not find user")}

    let entries = await EntryRepo.find({
        relations: {
            log: {
                book: true,
                user: {
                    logs: {
                        book: true
    }   }   }   }   })

    if (!entries) {throw Error("Could not fetch entries")};

    entries = entries
        .filter((entry: Entry) => timelineFilter(entry, user));

    if (!entries) {throw Error("Could not create timeline")};

    return (entries);
}

function timelineFilter(entry: Entry, user: User) {
    const userLog = user.logs.find(log => log.book.bid === entry.log.book.bid)
    return userIsReadingBook(userLog) && userHasReadFarEnough(entry, userLog)
}

function userIsReadingBook(userLog: Log) {
    return !!userLog;
}

function userHasReadFarEnough(entry: Entry, userLog: Log) {
    return (userLog.index > entry.log.index);
}
// }

// New Post Code {
async function newPost(req: AuthRequest) {
    checkForProperties(["title", "content", "index"], req.body);

    const authedLog = await LogRepo.findOne({
        relations: {
            user: true
        },
        where: {
            user: {
                id: req.token.id as string,
            },
            id: req.body.log as number,
    }   })

    if (!authedLog) {throw Error("You are not permitted to access this resource")}

    let entry: Entry;

    try {
        entry = EntryRepo.create({
            title: req.body.title,
            content: req.body.content,
            index: req.body.index,
            likedBy: [authedLog.user],
            uploadDate: Date.now(),
        });
    } catch (e) {
        throw Error("Could not create new entry")
    };
        
    authedLog.entries.push(entry);

    LogRepo.save(authedLog)

    return {success: true}
}


// }


function checkForProperties(properties: string[], body: any) {
    const result = properties
        .map((property) => eval(`body.${property}`))
        .some((x) => x === undefined)
    if (result === true) {
        throw Error("Invalid Body");
    }
    return;
}