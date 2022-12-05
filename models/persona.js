const mongoose = require("mongoose")

const Schema = mongoose.Schema
const personasSchema = new Schema ({
    nombreApellido:{
        type:String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    activo:{
        type:Boolean,
        required:true
    },
    dni:{
        type: Number,
        required:true
    },
    cuit:{
        type: Number,
        required:true
    },
    rol:{
        type:String,
        required:true
    }
    
})
const Persona = mongoose.model('Persona',personasSchema)//el modelo se crea en mayuscula y singular
module.exports = {Persona}