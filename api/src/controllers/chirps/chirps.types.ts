import { Document, Model } from "mongoose";

export interface IChirp {
    content: String,
    posted: Date,
    author: String,
    likes: Number, 
};

export interface IChirpDocument extends IChirp, Document {};

export interface IChirpModel extends Model<IChirpDocument> {};