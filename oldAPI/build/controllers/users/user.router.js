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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_model_1 = require("./users.model");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_model_1.UserModel.find({});
        console.log(users);
        res.status(200).send(users);
    }
    catch (e) {
        console.error("Could not get all Users");
        res.status(500).send(e.message);
    }
}));
exports.userRouter.get("/*", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userID = req.query.uid;
    if (!userID) {
        res.status(400).send("Invalid Request");
        return;
    }
    ;
    try {
        const user = yield users_model_1.UserModel.findOne({ _id: userID });
        if (!user) {
            res.status(403).send("Couldn't find user with that ID");
            return;
        }
        ;
        res.status(200).send(user);
    }
    catch (e) {
        console.error("Error querying model");
        res.status(500).send(e.message);
    }
}));
