"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const SephoraAPI_1 = __importDefault(require("./controllers/SephoraAPI"));
const app = (0, express_1.default)();
const PORT = 3000;
(0, SephoraAPI_1.default)();
app.use(express_1.default.json());
app.get('/shop', (req, res) => {
    if (req) {
        console.log("shop endpoint reached");
        res.status(200).json({});
    }
});
app.get('/product', (req, res) => {
    if (req) {
        console.log("product endpoint reached");
        res.status(200).json({});
    }
});
app.get('/search', (req, res) => {
    if (req) {
        console.log("search endpoint reached");
        res.status(200).json({});
    }
});
app.get('/', (req, res) => {
    if (req) {
        (0, SephoraAPI_1.default)()
            .then((result) => {
            console.log("root endpoint reached");
            res.status(200).send(result);
        });
    }
});
app.use('/', express_1.default.static(path_1.default.join(__dirname, "../public")));
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
//# sourceMappingURL=server.js.map