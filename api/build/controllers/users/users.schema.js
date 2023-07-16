"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const users_statics_1 = require("./users.statics");
const users_methods_1 = require("./users.methods");
const UserSchema = new mongoose_1.Schema({
    displayName: String,
    joined: {
        type: Date,
        default: new Date()
    },
    avatar: String,
    username: String,
});
UserSchema.statics.findOneByUserNameOrCreate = users_statics_1.findOneByUserNameOrCreate;
UserSchema.methods.setDisplayName = users_methods_1.setDisplayName;
exports.default = UserSchema;
