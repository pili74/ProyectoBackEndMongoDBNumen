const { Persona } = require("../models/persona")
const { validationResult } = require("express-validator")
const axios = require('axios')

const crearPersona = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Persona(req.body)
            await item.save()
            res.status(201).json({ item })
        } else {
            res.status(501).json({ err })
        }
    } catch (error) {
        res.status(501).json({ error })
    }
}

//vamos a ver los datos que creamos arriba
const verPersona = async (req, res) => {
    const item = await Persona.find()
    res.status(200).json({ item })
}
//vamos a ver una sola Persona eje 4
const verUnaPersona = async (req, res) => {
    const item = await Persona.findById(req.params.id)
    res.status(200).json({ item })
}

//vamos a modificar un registro
const modificarPersona = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Persona.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({ msg: "se modifico la persona" })
        } else {
            res.status(501).json({ err })
        }
    } catch (error) {
        res.status(501).json({ error })
    }
}


//delete eliminar registro
const eliminarPersona = async (req, res) => {
    const item = await Persona.findByIdAndDelete(req.params.id)
    res.status(204).json({ msg: "Persona Eliminada: ", item })
}


//Consume la api externa 

const consumirApi = async (req, res) => {
    try {
        const respuesta = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        res.status(200).json({ resp: respuesta.data })
    } catch (error) {
        res.status(501).json({ error })
    }

}


module.exports = { crearPersona, verPersona, verUnaPersona, modificarPersona, eliminarPersona, consumirApi } //exportando index como una funcion no como objeto