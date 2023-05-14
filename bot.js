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
const dotenv_1 = require("dotenv");
const __init_mongoose_1 = __importDefault(require("./__init_mongoose"));
const __intents_1 = __importDefault(require("./__intents"));
const __interact_1 = __importDefault(require("./__interact"));
const __onready_1 = __importDefault(require("./__onready"));
(0, dotenv_1.config)();
(0, __init_mongoose_1.default)();
const BOT = new discord_js_1.Client({
    intents: (0, __intents_1.default)()
});
BOT.on(discord_js_1.Events.InteractionCreate, (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, __interact_1.default)(interaction);
}));
BOT.on(discord_js_1.Events.ClientReady, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, __onready_1.default)(BOT.user.id);
}));
BOT.token = process.env.BOT_TOKEN;
BOT.login().then(() => {
    console.log('Bot is ready');
});
