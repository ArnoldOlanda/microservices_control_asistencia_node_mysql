const dbConnection = require("../config/dbConnection");
const conn = dbConnection();

class Empleado {
  listar(response, username) {
    let data = [];
    conn.query("CALL listarEmpleados;", (err, results) => {
      if (err) throw err;
      else {
        data.push(results[0]);
        response.json({
          data: data,
          nombreUsuario: username,
        });
      }
    });
  }

  consulta(response, dni) {
    conn.query("CALL sp_busca_empleado(?)", [dni], (err, results) => {
      if (err) throw err;
      else response.json(results[0]);
    });
  }

  activar(response, dni) {
    conn.query("UPDATE empleado set estado=1 where dni=?", [dni], (err) => {
      if (err) throw err;
      else response.json({msg:'El usuario ahora esta activo'});
    });
  }

  desactivar(response, dni) {
    conn.query("UPDATE empleado set estado=0 where dni=?", [dni], (err) => {
      if (err) throw err;
      else response.json({msg:'El usuario ahora esta inactivo'});
    });
  }

  registrarActualizar(response, data) {
    conn.query(
      `CALL sp_inserta_actualiza_empleado(?,?,?,?,?,?,?,?,?,?,?)`,
      data,
      (err,results) => {
        if (err) throw err;
        else response.json( { msg:results[0][0].mensaje } );
      }
    );
  }

}

module.exports = Empleado;
