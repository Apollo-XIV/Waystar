import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as express from "express"

AppDataSource.initialize().then(async () => {
    console.log("db connection initialized");
}).catch(error => console.log(error));

const app = express();

app.use(express.json());

app.get("/test", async (req: express.Request, res: express.Response) => {
    const users = await AppDataSource.manager.find(User);
    res.send(users)
});


const server = app.listen(3001, () => {
    console.log("Server Listening on Port 3001");
})