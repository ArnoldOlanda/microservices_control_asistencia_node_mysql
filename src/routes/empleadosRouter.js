const { Router } = require("express");
const router = Router();
const { 
    listar,
    consulta, 
    activar, 
    desactivar,
    registrarActualizar } = require('../controllers/empleadosController');


router.get('/',listar)
router.get('/:dni',consulta)
router.get('/activate/:dni',activar)
router.get('/desactive/:dni',desactivar)
router.post('/regOrUpdate',registrarActualizar)

module.exports=router