//----------------------------------------------------------------------------
// + Importacion paquetes
//----------------------------------------------------------------------------

//Importar y configurar dotenv para las variables de entorno
require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const jwtConfig = require("../jwt.config");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { Usuario } = require('./models/usuario');
const { response } = require("express");
const { Result } = require("postcss");
const auth = require("./Auth");



//----------------------------------------------------------------------------
// + Configuracion e inicializacion
//----------------------------------------------------------------------------
const app = express();
app.set("key", jwtConfig.clave); //Se inicializa el secret - JWT
app.use(express.json()); // Se configura para poder manejar solicitudes JSON
app.use(
    cors(corsOptions)
);
const PORT = process.env.PORT || "3001";

// Se configura CORS para el acceso desde el frontend
var corsOptions = {
    origin:"*",
    optionsSuccessStatus: 200,
};



//---------------------------------------------------------------
// Conexion a BD / MongoDB con Mongoose
//---------------------------------------------------------------
const uri = `mongodb+srv://${process.env.DB_USUARIO}:${process.env.DB_PASSWORD}@${process.env.DB_DOMAIN}/${process.env.DB_NAME}&appName=${process.env.DB_CLUSTER}`;

const options = 
  { serverApi: 
    { version: '1',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      w: 'majority' } };

mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
  }); 


//---------------------------------------------------------------
// APIs endpoints
//---------------------------------------------------------------
//---Registro de Usuario
app.post ("/register", (request, response) => {

  bcrypt.hash(request.body.password, 10)
  .then((hashedPassword)=> {
    const user = new Usuario ({
      email: request.body.email,
      password: hashedPassword,
    })

    user  
      .save({
        writeConcern: { w: 'majority' }
      })
      .then ((result)=> {
        response.status(201).send({
          message: "Usuario creado con exito",
          result,
        });

      })
      .catch((error)=> {
        response.status(500).send({
          message: "Error creando user",
          error,
        });
      });
  })
  .catch((e)=> {
    response.status(500).send({
      message: "Pass was not hashed with success",
      e,
    })
  })

});

//---Login de Usuario
app.post("/login", (request, response) => {
  //Busqueda de usuario en la base
  console.log(request.body)

    Usuario.findOne({email: request.body.email})
    //En caso de que exista, se verifica, se crea el Token y se logea
    .then((user)=> {
      if (!user) {
        console.log("error en usuario")
        return response.status(404).send({
          message: "No se encuentra el email",
        })
      }
      bcrypt.compare(request.body.password, user.password)
      .then((passwordCheck)=> {
        //Verificacion de pass
        if (!passwordCheck){
          console.log("La contra no coincide")
          return response.status(400).send({
            message: "La contraseña no coincide",
            error,
          });
        }
        //Creacion de JWT Token si se verifica la pass
        const token = jwt.sign(
          {
            userId: user._id,
            userEmail: user.email,
          },
          "RANDOM-TOKEN",
          {expiresIn: "24h"}
        );
        //Comunicacion de exito 
        console.log("Login exitoso")
        response.status(200).send ({
          message: "Login exitoso",
          email: user.email,
          token, 
          ok: true
        })
      })
      .catch ((error)=> {
        console.log("Error en la contrasenha", error)
        response.status(400).send({
          message: "Error en contraseña",
          error,
        });
      })
    })
    .catch ((e)=> {
      console.log("Existo", e)
      response.status(404).send({
        message: "No se encuentra el email",
        e,
      })
    })

});


//--- Proteccion de rutas (Prueba)
//ruta libre
// app.get("/free-endpoint", (request, response)=> {
//   response.json({message: "Usuario libre de acceso"})
// });

// //ruta autenticada
// app.get("/auth-endpoint", auth, (request, response)=> {
//   response.json({message: "Contas con autorizacion"})
// })



//Se establece que la app se escuche desde el puerto configurado
app.listen(PORT, () => {
  console.log (`Servidor escuchando en el puerto ${PORT}`)
});
