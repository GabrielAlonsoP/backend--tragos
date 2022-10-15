import { Request, Response, Router } from "express";


const defaulRoutes = Router();

defaulRoutes.get('/', (req:Request, res:Response)=>{
    return res.json({
        ok:true,
        msj:"Todo funciona correctamente"
    })
})

export default defaulRoutes;