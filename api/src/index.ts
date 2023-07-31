import { AppDataSource } from "./data-source"
import express, {Response} from "express"
import cors from "cors";
import * as dotenv from "dotenv";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import {auth, AuthRequest} from "@middleware/auth";
import {BookRouter, UserRouter} from "@routes";

//===== CONFIG ====>
dotenv.config();

AppDataSource.initialize().then(async () => {
    console.log("db connection initialized");
}).catch(error => console.log(error));

const secret = process.env.NEXTAUTH_SECRET as string;


const corsSettings = {
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost"],
}




const app = express();

//===== MIDDLEWARE ====>
app.use(express.json());
app.use(cors(corsSettings));
app.use(cookieParser());
app.use(helmet());
app.use(auth);


//===== ROUTES ======>

app.use("/books", BookRouter);
app.use("/users", UserRouter);

app.get("/", async (req: AuthRequest, res: Response) => {;
    console.log(req.token);
    res.status(200).send("boop")
})


const server = app.listen(3001, () => {
    console.log("Server Listening on Port 3001");
})

