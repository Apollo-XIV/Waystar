import express, {Response} from "express";
import {AuthRequest} from "@middleware/auth";
import {Log, generateBID} from "@entities/Log";
import { BookRepo, LogRepo, UserRepo } from "@repos";

export const LogRouter = express.Router();

// PRIVILEGED: List all logs on the site
LogRouter.get("/", async (req: AuthRequest, res: Response) => {
    const results = await LogRepo.find({
        relations: {
            book: true,
            user: true,
        }
    });
    res.status(200).send(results)
})


// Fetch Log By ID
LogRouter.get("/find=:id", async (req: AuthRequest, res: Response) => {
    const user = await LogRepo.find({
        where: {
            id: parseInt(req.params.id)
        }
    })

    res.status(200).send(user);
})

LogRouter.get("/readers=:bid", async (req: AuthRequest, res: Response) => {
    // if (!req.].book) {res.status(400).send("bad request"); return;}
    
    // const bookInfo = req.body.book;

    const count = await LogRepo.count({
        relations: {
            book: true,
        },
        where: {
            book: {
                bid: req.params.bid
            }
        }
    }).catch((e) => {
        res.status(501).send("An Internal Server Error Occurred")
        console.error(e);
        return;
    })

    res.status(200).send(JSON.stringify({count: count}));
})

// Create new user by JSON Body
LogRouter.post("/new", async (req: AuthRequest, res: Response) => {
    // get user from db
    const user = await UserRepo.findOne({where: {id: (req.token.uid as number)}});
    console.log(req.body);
    const bookInfo = req.body.book;
    const bid = generateBID(bookInfo.title, bookInfo.authors)
    // get book from db
    let book = await BookRepo.findOne({where: {bid: bid}})
    // if does not exist, create
    if (!book) {
        book = BookRepo.create({
            bid: bid,
            title: bookInfo.title,
            authors: bookInfo.authors,
            logs: null,
        })
    }
    // create new log object  
    const log = LogRepo.create({
        user: user,
        entries: null,
        index: 0,
        book: book,
        gid: bookInfo.gid
    })

    try {
        await LogRepo.save(log);
    } catch (e: any) {
        res.status(501).send(e);
        return;
    }
    res.status(200).send({response:"Successfully Added Log"});
    console.log(`Added Log:${book.title} for User ${user.name}`)
})

// Get all logs for the user requesting it
LogRouter.get("/userLogs", async (req: AuthRequest, res: Response) => {
    const logs = await LogRepo.find({
        relations: {
            book: true,
            user: true,
        },
        where: {
            user: {
                id: req.token.uid as number,
            }
        }
    }).catch((e) => {
        res.status(501).send("An Internal Server Error Occurred")
        console.error(e);
        return;
    })
    res.status(200).send(logs);
    console.log(logs);
})

/**
 * {
 *  user:{
 *      username: "exampleNameo",
 *      displayName: "John Doe",
 *      email: "test@email.com",
 *      roles: ["user"],
 *      logs: []
 * }
 * }
 * 
 * 
 */