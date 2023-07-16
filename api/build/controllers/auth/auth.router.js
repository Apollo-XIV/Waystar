"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const next_auth_1 = __importDefault(require("next-auth"));
const github_1 = __importDefault(require("next-auth/providers/github"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
    throw new Error("REQUIRED ENV VARS NOT SET");
}
const options = {
    providers: [
        (0, github_1.default)({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ]
};
exports.authRouter = express_1.default.Router();
exports.authRouter.all("*", (req, res) => {
    req.query.nextauth = req.url
        .slice(1)
        .replace(/\?.*/, "")
        .split("/");
    req.url = '/api/auth' + req.url;
    console.log(req.query.nextauth);
    return (0, next_auth_1.default)(req, res, options);
});
