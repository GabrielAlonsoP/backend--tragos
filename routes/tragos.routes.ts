import { Request, Response, Router } from "express";
import { Trago } from "../models/trago.model";


const tragoRoutes = Router();

tragoRoutes.get('/pagin', async (req:Request, res:Response)=>{
    

    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip*perPage;
    const trago = await Trago.find().skip(skip).limit(perPage);

        return res.json({
            ok:true,
            msj: "Get OK",
            trago
        })
})

tragoRoutes.get('/', async (req:Request, res:Response) => {

        const trago = await Trago.find();

        return res.json({
            ok:true,
            msj: "Get OK",
            trago
        })
});

tragoRoutes.post('/', (req:Request, res:Response)=>{

    const data = req.body;

    const trago = {
        nombre: data.nombre,
        origen: data.origen, 
        imagen: data.imagen,
        precio: data.precio
    }

    Trago.create(trago).then(tragoDb=>{
        console.log(tragoDb);
        return res.json({
            ok:true,
            msj:"Registro creado correctamente",
            tragoDb
        })
    }).catch(err=>{
        return res.json({
            ok:false,
            msj:"Ocurrio un error al crear el registro",
            err
        })
    })

});

tragoRoutes.put('/:id', (req:Request, res:Response)=>{

    const tragoId = req.params.id;
    const trago = {
        nombre: req.body.nombre,
        origen: req.body.origen, 
        imagen: req.body.imagen,
        precio: req.body.precio
    }

    Trago.findByIdAndUpdate(tragoId, trago).then(tragoDb=>{
        return res.json({
            ok:true,
            tragoDb
            
        })
    })

});

tragoRoutes.delete('/', (req:Request, res:Response)=>{
    const tragoId = req.query.id;
    Trago.findByIdAndDelete(tragoId).then(tragoDb=>{
        return res.json({
            ok:true,
            tragoDb
        })
    });
})

export default tragoRoutes;