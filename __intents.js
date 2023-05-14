"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const __intents_lits_1 = require("./__intents_lits");
const getIntents = () => {
    const INTENTS = new discord_js_1.IntentsBitField();
    __intents_lits_1.INTENTS.forEach((intent) => {
        INTENTS.add(intent);
    });
    return INTENTS;
};
exports.default = getIntents;
