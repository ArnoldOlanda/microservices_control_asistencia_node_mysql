//Cambiar la contraseña por defecto del usuario root
//require('dotenv').config()

const mysql = require("mysql2");

//-------------------Produccion--------------------------------
// module.exports = () => {
//   return mysql.createPool({
//     host:'us-cdbr-east-05.cleardb.net',
//     user: 'b8f01177a02349',
//     password:'e3634958',
//     database: 'heroku_375a48be8c216d2'
//   });
// };

//------------------Desarrollo----------------------------------
module.exports = () => {
  return mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'root',
    database: 'ctrl_asis_empleados'
  });
};

//b8f01177a02349:e3634958@us-cdbr-east-05.cleardb.net/heroku_375a48be8c216d2