"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMANDS = void 0;
const ltp_1 = __importDefault(require("./ltp"));
const ping_1 = __importDefault(require("./ping"));
exports.COMMANDS = [ping_1.default, ltp_1.default];
const COMMAND_DATA = exports.COMMANDS.map((command) => command.data.toJSON());
exports.default = COMMAND_DATA;
