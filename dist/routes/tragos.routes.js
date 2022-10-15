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
const express_1 = require("express");
const trago_model_1 = require("../models/trago.model");
const tragoRoutes = (0, express_1.Router)();
tragoRoutes.get('/pagin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const trago = yield trago_model_1.Trago.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        msj: "Get OK",
        trago
    });
}));
tragoRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trago = yield trago_model_1.Trago.find();
    return res.json({
        ok: true,
        msj: "Get OK",
        trago
    });
}));
tragoRoutes.post('/', (req, res) => {
    const data = req.body;
    const trago = {
        nombre: data.nombre,
        origen: data.origen,
        imagen: data.imagen,
        precio: data.precio
    };
    trago_model_1.Trago.create(trago).then(tragoDb => {
        console.log(tragoDb);
        return res.json({
            ok: true,
            msj: "Registro creado correctamente",
            tragoDb
        });
    }).catch(err => {
        return res.json({
            ok: false,
            msj: "Ocurrio un error al crear el registro",
            err
        });
    });
});
tragoRoutes.put('/', (req, res) => {
    const tragoId = req.params.id;
    const trago = req.body;
    trago_model_1.Trago.findByIdAndUpdate(tragoId, trago).then(tragoDb => {
        return res.json({
            ok: true,
            tragoDb
        });
    });
});
tragoRoutes.delete('/', (req, res) => {
    const tragoId = req.query.id;
    trago_model_1.Trago.findByIdAndDelete(tragoId).then(tragoDb => {
        return res.json({
            ok: true,
            tragoDb
        });
    });
});
exports.default = tragoRoutes;
