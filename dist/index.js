"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const sneaker_routes_1 = __importDefault(require("./routes/sneaker.routes"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
server.app.use((0, cors_1.default)());
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', default_routes_1.default);
server.app.use('/trago', sneaker_routes_1.default);
mongoose_1.default.connect('mongodb+srv://usr_sneakers:sneakers2022@cluster0.ehz8x8y.mongodb.net/sneakersDb', (error) => {
    if (error) {
        throw error;
    }
    console.log("Base de datos online");
});
server.Start(() => {
    console.log(`Servidor corriendo en el puerto:${server.port}`);
});
