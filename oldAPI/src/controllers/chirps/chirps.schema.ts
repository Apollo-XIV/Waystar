import { Schema } from "mongoose";

const ChirpSchema = new Schema({
    content: String,
    posted: {
        type: Date,
        default: new Date(),
    },
    author: String,
    likes: Number, 
});

export default ChirpSchema;
