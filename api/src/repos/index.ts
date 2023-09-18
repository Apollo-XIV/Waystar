import {AppDataSource} from "../data-source";
import * as e from "@entities";

const BookRepo = AppDataSource.getRepository(e.Book);
const UserRepo = AppDataSource.getRepository(e.User);
const LogRepo = AppDataSource.getRepository(e.Log);
const EntryRepo = AppDataSource.getRepository(e.Entry);
const CategoryRepo = AppDataSource.getRepository(e.Category);

export {BookRepo, UserRepo, LogRepo, EntryRepo, CategoryRepo};