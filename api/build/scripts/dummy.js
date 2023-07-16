"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = require("../controllers/users/users.model");
const db_1 = require("../modules/db");
(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, db_1.connect)();
    const users = [
        { displayName: "Emma", username: "bobby" },
        { displayName: "Elise", username: "sdfa" },
        { displayName: "Jack", username: "mikeyj" },
        { displayName: "Oliver", username: "Moss" },
        { displayName: "Jamie", username: "ppos" },
        { displayName: "Aidan", username: "uwu" },
        { displayName: "Jordan", username: "whoopsies" },
        { displayName: "Erin", username: "crimes" },
        { displayName: "William", username: "fuuuuc" },
        { displayName: "Ethan", username: "test" },
    ];
    try {
        for (const user of users) {
            yield users_model_1.UserModel.create(user);
            console.log(`Created user ${user.displayName} @${user.username}`);
        }
        (0, db_1.disconnect)();
    }
    catch (e) {
        console.error(e);
    }
}))();
