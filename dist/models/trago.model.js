"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trago = void 0;
const mongoose_1 = require("mongoose");
const tragoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true
    },
    origen: {
        type: String,
    },
    imagen: {
        type: String,
    },
    precio: {
        type: String,
    }
});
exports.Trago = (0, mongoose_1.model)('Trago', tragoSchema);
