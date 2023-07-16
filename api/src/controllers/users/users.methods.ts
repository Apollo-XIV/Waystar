import { IUserDocument } from "./users.types";
import { Document } from "mongoose";

export async function setDisplayName(this: IUserDocument, newName: string): Promise<void> {
    this.displayName = newName;
}