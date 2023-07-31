import { Document, Model } from "mongoose";

export interface IUser {
    displayName: String;
    joined: Date;
    avatar: URL | undefined;
    username: String;
};

export interface IUserDocument extends IUser, Document {
    setDisplayName: (this: IUserDocument) => Promise<void>;
};

export interface IUserModel extends Model<IUserDocument> {
    findOneOrCreate: ({
        displayName,
        avatar,
        username
        }: IUser
    ) => Promise<IUserDocument>;
};