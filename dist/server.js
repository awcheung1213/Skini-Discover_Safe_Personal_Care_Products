"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
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