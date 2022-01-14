const dbConnection = require("../config/dbConnection");
const conn = dbConnection();

conn.connect((err) => {
  if (err) throw err;
  else console.log("Conected to database");
});

class Login {
  verifyLogin(request, response, user, password) {
    let validUser = true;

    //Busqueda el usuario
    conn.query(`CALL sp_busca_empleado(?)`, [user], (err, result) => {
      if (err) throw err;

      if (result[0].length < 1) {
        validUser = false;
      }

      if (validUser == false) response.json({ message:"El usuario no existe" });
      else {

        //Validacion de la contraseña
        conn.query(`CALL sp_verifica_password(?,?)`,
          [user, password],
          (err, result) => {
            if (err) throw err;

            if (result[0].length < 1) {
              response.json({user,errmsg:'La contraseña no es correcta para el usuario'});
            } else {
              request.session.username = result[0][0].nombre;
              response.json( { 
                msg:request.session.username, 
                acceso:validUser 
              });
            }
          }
        );
      }
    });
  }
}

module.exports = Login;
