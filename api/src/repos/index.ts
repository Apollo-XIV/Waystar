import {AppDataSource} from "../data-source";
import {Book, User, Log, Entry} from "../entity";

const BookRepo = AppDataSource.getRepository(Book);
const UserRepo = AppDataSource.getRepository(User);
const LogRepo = AppDataSource.getRepository(Log);
const EntryRepo = AppDataSource.getRepository(Entry);

export {BookRepo, UserRepo, LogRepo, EntryRepo};