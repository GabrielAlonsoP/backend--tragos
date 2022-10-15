import { Document, model, Schema } from "mongoose";


const tragoSchema = new Schema({

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
    precio:{
        type: String,
    }
})

interface ITrago extends Document{
    nombre: string;
    origen: string; 
    imagen: string;
    precio: string;
}

export const Trago = model<ITrago>('Trago', tragoSchema);