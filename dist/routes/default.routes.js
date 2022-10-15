"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaulRoutes = (0, express_1.Router)();
defaulRoutes.get('/', (req, res) => {
    return res.json({
        ok: true,
        msj: "Todo funciona correctamente"
    });
});
exports.default = defaulRoutes;
