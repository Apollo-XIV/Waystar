import express, {Response, Router} from "express";
import {AuthRequest} from "@middleware/auth";
import { EntryRepo, LogRepo } from "@repos";
import { Entry, Log } from "@entities";
import { In, LessThan } from "typeorm";

export const EntryRouter = express.Router();

EntryRouter.get("/", async (req: AuthRequest, res: Response) => {
    const entries = await EntryRepo.find({
        relations: {
            log: {
                book: true,
                user: true
            }
        }
    })
    res.status(200).send(entries);
})
EntryRouter.delete("/:id", async (req: AuthRequest, res: Response) => {
    const resp = await EntryRepo.delete({
            id: parseInt(req.params.id)
        })
    res.send("did it")
    
})

EntryRouter.get("/timeline", async (req: AuthRequest, res: Response) => {
    let entries = await EntryRepo.find({
        relations: {
            log: {
                book: true,
                user: {
                    logs: {
                        book: true
                    }
                }
            }
        }
    })

    

    entries = entries.filter((entry: Entry) =>
        // Check if book is in array of users log
        //      -> 

        // Returns true if entry is in valid list of books
        entry.log.user.logs
            .reduce((accumulator: Boolean, userLog: Log) => {
                if  (accumulator || 
                   ((userLog.book.bid == entry.log.book.bid) &&
                    (entry.index <= userLog.index))) {
                    return true;
                } else {
                    return false;
                }
            }, false)
        
        // Check if index of entry is less than index of user's log
        
    )



    res.status(200).send(entries);
})

EntryRouter.post("/test", async (req: AuthRequest, res: Response) => {
    console.log(req.body)
    res.end();
});

EntryRouter.post("/new", async (req: AuthRequest, res: Response) => {

    const authedLog = await LogRepo.findOne({
        relations: {
            user: true
        },
        where: {
            user: {
                id: req.token.id as number,
            },
            id: req.body.log as number,
        }
    })
    if (!authedLog) {res.status(403).send({error: "You do not have permission to access this resource"})}

    if (req.body.index > authedLog.index) {
        console.log("running!!!")
        authedLog.index = req.body.index as number;
        await LogRepo.save(authedLog);
    }
    console.log("backup")

    const entry = EntryRepo.create({
        title: "",
        content: req.body.content,
        index: req.body.index,
    });
    
    await EntryRepo.save(entry);

    await EntryRepo
        .createQueryBuilder()
        .relation(Entry, "log")
        .of(entry)
        .set(req.body.log)

    

    res.send({ok: true});
})

