import express, {Request, Response} from "express";
import * as userType from "./users.types";
import { UserModel } from "./users.model";

export const userRouter = express.Router();


// GET /user/
// Returns all users
userRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users: userType.IUser[] = await UserModel.find({});
        console.log(users);
        res.status(200).send(users);
    } catch (e: any) {
        console.error("Could not get all Users");
        res.status(500).send(e.message);
    }
});

userRouter.get("/*", async (req: Request, res: Response) => {

    const userID = req.query.uid;
    if (!userID) {res.status(400).send("Invalid Request"); return; };

    try {
        const user: userType.IUserDocument | null = await UserModel.findOne({ _id: userID });
        if (!user) {res.status(403).send("Couldn't find user with that ID"); return};
        res.status(200).send(user);
    } catch (e: any) {
        console.error("Error querying model");
        res.status(500).send(e.message);
    }
});

// PUT user/?uname=*
// finds or creates a user with a given username
// userRouter.put("/*", async (req: Request, res: Response) => {
//     const uname = req.query.uname;
//     if (!uname) { res.status(400).send("Invalid Request"); return; };
//     try {
//         const user: userType.IUserDocument = await UserModel.findOneByUserNameOrCreate(uname);
//         res.status(200).send(user)
//     } catch (e: any) {
//         console.error("Error calling findOneByUserNameOrCreate()");
//         res.status(500).send(e.message);
//     }
// });