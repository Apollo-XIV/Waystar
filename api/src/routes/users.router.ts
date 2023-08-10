import express, {Response} from "express";
import {AuthRequest} from "@middleware/auth";
import {User, Log} from "@entities";
import { UserRepo } from "@repos";

export const UserRouter = express.Router();

UserRouter.get("/", async (req: AuthRequest, res: Response) => {
    const results = await UserRepo.find();
    res.status(200).send(results)
})


// Fetch User By ID
UserRouter.get("/find=:id", async (req: AuthRequest, res: Response) => {
    const user = await UserRepo.find({
        where: {
            id: parseInt(req.params.id)
        }
    })

    res.status(200).send(user);
})

UserRouter.delete("/delete=:id",async (req: AuthRequest, res: Response) => {
    await UserRepo
        .createQueryBuilder("users")
        .delete()
        .from(User)
        .where("id = :id", {id: req.params.id})
        .execute()
        .catch((e) => {
            console.error(e);
        });
    console.log("deleted user")
})

// Create new user by JSON Body
UserRouter.post("/new", async (req: AuthRequest, res: Response) => {
    if (!req.body.profile) {res.status(400).send("Bad Request, please supply all required data"); return;};
    const isNewUser = (await UserRepo.find({where: {email: req.body.profile.email}})) ? true : false;

    if (!isNewUser) {res.status(400).send("User already exists"); return;}

    const user = UserRepo.create({
        id: req.body.profile.id,
        handle: "",
        name: req.body.profile.name,
        email: req.body.profile.email,
        roles: ["user"],
        logs: null,
    })

    try {
        await UserRepo.save(user);
    } catch (e: any) {
        res.status(501).send(e);
        return;
    }
    res.status(200).send(user);
    console.log(`Created user ${user.name}`)

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