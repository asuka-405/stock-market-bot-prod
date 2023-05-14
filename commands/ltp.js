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
const discord_js_1 = require("discord.js");
const fetcher_1 = require("../StockMarketDataFetcher/fetcher");
const __nse_codes_1 = require("./__nse_codes");
// fetchNseCodes().then((nseCodes: string[]) => {
//   let codestr = ''
//   nseCodes.forEach((code) => {
//     codestr += `"${code}",\n`
//   })
//   require('fs').writeFileSync('./nsecodes.arr', codestr)
// })
const CODE_CHOICES = __nse_codes_1.NSE_CODES.map((code) => {
    if (typeof code === 'number')
        code = code.toString();
    return {
        name: code,
        value: code
    };
}).slice(0, 25);
const data = new discord_js_1.SlashCommandBuilder()
    .setName('ltp')
    .setDescription('Get the latest price of a stock')
    .addStringOption((option) => {
    return option
        .setName('nsecode')
        .setDescription('NSE Code of the company')
        .setRequired(true);
    // .addChoices(...CODE_CHOICES)
});
const execute = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    const nseCode = interaction.options.data[0].value;
    const data = yield (0, fetcher_1.fetchByNseCode)(nseCode);
    const price = data[nseCode].ltp;
    const embed = ltpEmbed(nseCode, price);
    yield interaction.reply({ embeds: [embed] });
});
function ltpEmbed(nseCode, price) {
    const FIELDS = [
        {
            name: 'NSE Code',
            value: nseCode
        },
        {
            name: 'Latest Price',
            value: `${price}`
        }
    ];
    const EMBED = new discord_js_1.EmbedBuilder()
        .setTitle(`Latest Traded Price`)
        .addFields(FIELDS)
        .setColor('#ff7f50');
    return EMBED;
}
const ltp = { data, execute };
exports.default = ltp;
