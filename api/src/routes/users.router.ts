import express, {Response} from "express";
import {AuthRequest} from "../middleware/auth";

export const UserRouter = express.Router();

UserRouter.get("/", async (req: AuthRequest, res: Response) => {
    res.status(200).send("okay")
})