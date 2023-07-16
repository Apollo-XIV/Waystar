import { model } from "mongoose";
import { IChirpDocument } from "./chirps.types";
import ChirpSchema from "./chirps.schema";

export const ChirpModel = model<IChirpDocument>("chirp", ChirpSchema);