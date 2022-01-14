const Empleado = require("../models/empleadoModel");

module.exports = {
  listar: (req, res) => {
    if (!req.session.username) { //valida sesion activa
      username=req.session.username
      const empleado=new Empleado();
      empleado.listar(res,username);
    } else res.json({msg:'Es necesario iniciar sesion',acceso:false});
  },
  consulta:(req,res)=>{
    if (!req.session.username) {
      const {dni} = req.params
      const empleado=new Empleado()
      empleado.consulta(res,dni)
    } else res.json({msg:'Es necesario iniciar sesion',acceso:false});
  },
  activar: (req, res) => {
    if (!req.session.username) {
      const { dni } = req.params;
      const empleado=new Empleado()
      empleado.activar(res,dni)
    } else res.json({msg:'Es necesario iniciar sesion',acceso:false});
  },
  desactivar: (req, res) => {
    if (!req.session.username) {
      const { dni } = req.params;
      const empleado=new Empleado()
      empleado.desactivar(res,dni)
    } else res.json({msg:'Es necesario iniciar sesion',acceso:false});
  },
  registrarActualizar: (req, res) => {
    if (!req.session.username) {
      let data = [];
      let {dni, nombre, apellidos, celular, correo, direccion, 
        genero, cargo, contrasena, rol, accion} = req.body;

      data.push(dni,nombre,apellidos,celular,correo,direccion,genero,
      parseInt(cargo),contrasena,parseInt(rol),accion);

      const empleado=new Empleado()
      empleado.registrarActualizar(res,data);
    
    } else res.json({msg:'Es necesario iniciar sesion',acceso:false});

  },
};
