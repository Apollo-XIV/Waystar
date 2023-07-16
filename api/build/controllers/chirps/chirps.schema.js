"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChirpSchema = new mongoose_1.Schema({
    content: String,
    posted: {
        type: Date,
        default: new Date(),
    },
    author: String,
    likes: Number,
});
exports.default = ChirpSchema;
