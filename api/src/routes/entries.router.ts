import express, {Response, Router} from "express";
import {AuthRequest} from "@middleware/auth";
import { EntryRepo, LogRepo } from "@repos";
import { Entry } from "@entities";

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

EntryRouter.post("/test", async (req: AuthRequest, res: Response) => {
    console.log(req.body)
    res.end();
});

EntryRouter.post("/new", async (req: AuthRequest, res: Response) => {

    const authed = LogRepo.find({
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
    if (!authed) {res.status(403).send({error: "You do not have permission to access this resource"})}

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

