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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const __commander_1 = __importDefault(require("./commands/__commander"));
const onReady = (BOT_ID) => __awaiter(void 0, void 0, void 0, function* () {
    const REST = new discord_js_1.REST();
    REST.setToken(process.env.BOT_TOKEN);
    yield REST.put(discord_js_1.Routes.applicationCommands(BOT_ID), { body: __commander_1.default });
});
exports.default = onReady;
