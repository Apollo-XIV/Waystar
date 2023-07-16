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
exports.getAll = exports.get = exports.findOneByUserNameOrCreate = void 0;
function findOneByUserNameOrCreate(uname) {
    return __awaiter(this, void 0, void 0, function* () {
        const record = yield this.findOne({ username: uname });
        if (record) {
            return record;
        }
        else {
            return this.create({
                displayName: "none",
                avatar: "none",
                username: uname
            });
        }
    });
}
exports.findOneByUserNameOrCreate = findOneByUserNameOrCreate;
function get(userID) {
    return __awaiter(this, void 0, void 0, function* () {
        const record = yield this.findOne({ userID });
        return record;
    });
}
exports.get = get;
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const records = yield this.find();
        return records;
    });
}
exports.getAll = getAll;
