import * as Mongoose from "mongoose";
import { config } from "dotenv";

config();

const{
    DB_HOST: db_host
} = process.env;

let database: Mongoose.Connection;

export const connect = async () => {  // add your own uri below
    if (!db_host) {
        throw new Error("DB_HOST not set! edit you .env config");
    };

    const uri: string = db_host;

    if (database) {
        return;
    };
    
    await Mongoose.connect(uri);
    console.log("Connected")
};
  
export const disconnect = () => { 
    if (!database) {
        return;
    }
    Mongoose.disconnect();
};