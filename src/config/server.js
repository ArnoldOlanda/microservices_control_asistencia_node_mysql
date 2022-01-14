//Archivo de configuracion express

const express = require("express");
const path = require('path')
const session = require('express-session')


const app = express();

app.set("port", process.env.PORT || 4000);

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"../public")));

app.use(session({
  secret:'secretStringForSession',
  resave:false,
  saveUninitialized:false
}))


module.exports = app