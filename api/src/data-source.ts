import "reflect-metadata"
import { DataSource } from "typeorm"
import * as e from "@entities";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 8080,
    username: "postgres",
    password: "mysecretpassword",
    database: "test_db",
    synchronize: true,
    logging: false,
    entities: [e.User, e.Book, e.Log, e.Entry, e.Category],
    migrations: [],
    subscribers: [],
})