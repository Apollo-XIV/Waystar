import express, {Request, Response} from "express";
import * as chirpType from "./chirps.types";
import { ChirpModel } from "./chirps.model";

export const chirpRouter = express.Router();


// GET /chirp/
// Returns all chirps
chirpRouter.get("/", async (req: Request, res: Response) => {
    try {
        const chirps: chirpType.IChirpDocument[] = await ChirpModel.find({}).sort({ posted: 'desc'});
        console.log(chirps);
        res.status(200).send(chirps);
    } catch (e: any) {
        console.error("oopsies");
        res.status(500).send(e.message);
    }
});

// POST /chirp
// Creates a new post and returns the object
chirpRouter.post("/", async (req: Request, res: Response) => {
    // required elements
    const post = req.body.post;
    if (!post) {
        res.status(400).send("Invalid Request");
        return;
    }

    try {
        const chirp: chirpType.IChirp = await ChirpModel.create(post);
        res.status(200).send(chirp);
    } catch (e: any) {
        console.error("Error Creating Post");
        res.status(500).send(e.message);
    }
})