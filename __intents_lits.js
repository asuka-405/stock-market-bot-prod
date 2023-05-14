"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTENTS = void 0;
const discord_js_1 = require("discord.js");
exports.INTENTS = [
    discord_js_1.IntentsBitField.Flags.Guilds,
    discord_js_1.IntentsBitField.Flags.GuildMembers,
    discord_js_1.IntentsBitField.Flags.GuildMessages,
    discord_js_1.IntentsBitField.Flags.MessageContent
];
