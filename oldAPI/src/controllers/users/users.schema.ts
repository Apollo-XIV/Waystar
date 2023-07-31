import { Schema } from "mongoose";
import { findOneByUserNameOrCreate } from "./users.statics";
import { setDisplayName } from "./users.methods";

const UserSchema = new Schema({
    displayName: String,
    joined: {
        type: Date,
        default: new Date()
    },
    avatar: String,
    username: String,
});


UserSchema.statics.findOneByUserNameOrCreate = findOneByUserNameOrCreate;
UserSchema.methods.setDisplayName = setDisplayName;


export default UserSchema;
