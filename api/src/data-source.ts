import "reflect-metadata"
import { DataSource } from "typeorm"
import { User, Book, Log, Entry } from "@entities";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 8080,
    username: "postgres",
    password: "mysecretpassword",
    database: "test_db",
    synchronize: true,
    logging: false,
    entities: [User, Book, Log, Entry],
    migrations: [],
    subscribers: [],
})