var express = require('express');
var router = express.Router();
const { crearPersona, verPersona, verUnaPersona, modificarPersona, eliminarPersona, consumirApi } = require("../controllers/indexControllers")
const { validarId } = require("../middlewares/validarId")
const { check } = require("express-validator") 


//post crear un registro
router.post('/crear', [
    check("nombreApellido").notEmpty().withMessage("El Campo Nombre y Apellido es requerido").isLength({ min: 3, max: 20 }),
    check("direccion").notEmpty().withMessage("El Campo direccion es requerido"),
    check("telefono").notEmpty().withMessage("El Campo telefonoa es requerido"),
    check("email").notEmpty().withMessage("El Campo email es requerido"),
    check("activo").notEmpty().withMessage("El Campo rol es requerido"),
    check("dni").notEmpty().withMessage("El Campo dni es requerido"),
    check("cuit").notEmpty().withMessage("El Campo cuit es requerido"),
    check("rol").notEmpty().withMessage("El Campo rol es requerido")
], crearPersona)


//listar todos los registros
router.get('/ver', verPersona)

//ver un solo  registro
router.get('/ver/:id', validarId, verUnaPersona) //trae un solo registro que coincide con el id

//put modificar un solo registro
router.put('/modificar/:id', validarId, [
    check("nombreApellido").notEmpty().withMessage("El Campo Nombre y Apellido es requerido").isLength({ min: 3, max: 20 }),
    check("direccion").notEmpty().withMessage("El Campo direccion es requerido"),
    check("telefono").notEmpty().withMessage("El Campo telefonoa es requerido"),
    check("email").notEmpty().withMessage("El Campo email es requerido"),
    check("dni").notEmpty().withMessage("El Campo dni es requerido"),
    check("cuit").notEmpty().withMessage("El Campo cuit es requerido"),
    check("rol").notEmpty().withMessage("El Campo rol es requerido")
], modificarPersona)

//delete eliminar registo
router.delete('/borrar/:id', validarId, eliminarPersona)

//consumir api externa

router.get('/apiExterna', consumirApi)



module.exports = router;
