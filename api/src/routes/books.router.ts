import express, {Response} from "express";
import {AuthRequest} from "@middleware/auth";

export const BookRouter = express.Router();

BookRouter.get("/", async (req: AuthRequest, res: Response) => {
    console.log(req.token);
    res.status(200).send("okay");
})



/**
 * ==== ROUTES ====
 * "/"
 * GET => return all book values from db
 * PUT => create book if not already made, or update with new values
 * 
 * "/:id"
 * GET => return book details of given ID
 * DELETE => (admin only) Remove book from database
 * 
 */