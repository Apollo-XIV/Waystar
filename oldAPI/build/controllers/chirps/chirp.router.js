"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chirpRouter = void 0;
const express_1 = __importDefault(require("express"));
const chirps_model_1 = require("./chirps.model");
exports.chirpRouter = express_1.default.Router();
exports.chirpRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chirps = yield chirps_model_1.ChirpModel.find({}).sort({ posted: 'desc' });
        console.log(chirps);
        res.status(200).send(chirps);
    }
    catch (e) {
        console.error("oopsies");
        res.status(500).send(e.message);
    }
}));
exports.chirpRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body.post;
    if (!post) {
        res.status(400).send("Invalid Request");
        return;
    }
    try {
        const chirp = yield chirps_model_1.ChirpModel.create(post);
        res.status(200).send(chirp);
    }
    catch (e) {
        console.error("Error Creating Post");
        res.status(500).send(e.message);
    }
}));
