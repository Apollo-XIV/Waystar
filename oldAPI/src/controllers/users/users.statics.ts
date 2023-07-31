import { ObjectId } from "mongoose";
import { IUser, IUserDocument, IUserModel } from "./users.types";

export async function findOneByUserNameOrCreate(
    this: any,
    uname: String
  ): Promise<IUserDocument> {
    const record = await this.findOne({ username: uname });
    if (record) {
      return record;
    } else {
      return this.create({
        displayName: "none",
        avatar: "none",
        username: uname
        });
    }
}

export async function get(this: any, userID: string): Promise<IUserDocument> {
  const record = await this.findOne({userID});
  return record;
}

export async function getAll(this: any): Promise<IUserDocument[]> {
  const records = await this.find();
  return records;
}