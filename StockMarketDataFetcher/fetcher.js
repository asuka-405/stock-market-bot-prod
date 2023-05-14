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
exports.fetchNseCodes = exports.fetchByNseCode = exports.fetchStockData = void 0;
const axios_1 = __importDefault(require("axios"));
require('dotenv').config();
const fetchStockData = () => __awaiter(void 0, void 0, void 0, function* () {
    const URL = `https://api.stockmarketapi.in/api/v1/allstocks?token=${process.env.STOCK_MARKET_API_KEY}`;
    const response = yield axios_1.default.get(URL);
    return response.data.data;
});
exports.fetchStockData = fetchStockData;
const fetchByNseCode = (nseCode) => __awaiter(void 0, void 0, void 0, function* () {
    const URL = `https://api.stockmarketapi.in/api/v1/getprices?token=${process.env.STOCK_MARKET_API_KEY}&nsecode=${nseCode}`;
    const response = yield axios_1.default.get(URL);
    return response.data.data;
});
exports.fetchByNseCode = fetchByNseCode;
const fetchNseCodes = () => __awaiter(void 0, void 0, void 0, function* () {
    return (yield (0, exports.fetchStockData)()).map((stock) => stock['NSECode']);
});
exports.fetchNseCodes = fetchNseCodes;
