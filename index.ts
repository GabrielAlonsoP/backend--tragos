import Server from "./classes/server";
import defaulRoutes from "./routes/default.routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import tragoRoutes from "./routes/tragos.routes";
import cors from 'cors'


const server = new Server();

server.app.use(cors());
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}))
server.app.use('/',defaulRoutes);
server.app.use('/trago', tragoRoutes);

mongoose.connect('mongodb+srv://gasper_tragos:<password>@cluster0.4cipbhc.mongodb.net/tragosDb', (error)=>{
    if(error){
        throw error;
    }

    console.log("Base de datos online")
})

server.Start(()=>{
    console.log(`Servidor corriendo en el puerto:${server.port}`);
})