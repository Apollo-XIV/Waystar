"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChirpModel = void 0;
const mongoose_1 = require("mongoose");
const chirps_schema_1 = __importDefault(require("./chirps.schema"));
exports.ChirpModel = (0, mongoose_1.model)("chirp", chirps_schema_1.default);
