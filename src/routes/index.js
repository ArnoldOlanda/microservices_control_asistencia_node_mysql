const express = require("express");
const router = express.Router();
const empleadosRouter=require('./empleadosRouter')
const loginRouter=require('./login')


//Login routes
router.use('/login',loginRouter)
//Dashboard routes
router.use('/empleado',empleadosRouter)


module.exports = router;
