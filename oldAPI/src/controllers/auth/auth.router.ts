import express, {Request, Response} from "express";
import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { config } from "dotenv";
import { initialEnv } from "@next/env"

config();
if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {throw new Error("REQUIRED ENV VARS NOT SET")}

const options: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ]
}
export const authRouter = express.Router();

authRouter.all("*", (req: any, res: any) => {
    req.query.nextauth = req.url
                            .slice(1)
                            .replace(/\?.*/,"")
                            .split("/");
    req.url = '/api/auth'+req.url;
    console.log(req.query.nextauth)
    return NextAuth(req, res, options); 
})