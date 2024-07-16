//Creamos el modelo de usuario para acceder a la base de datos
const mongoose = require ('mongoose')

const usuarioSchema = new mongoose.Schema ({
    email: String,
    password: String
  })
  
  const Usuario = mongoose.model('usuario', usuarioSchema);

  module.exports = {Usuario};