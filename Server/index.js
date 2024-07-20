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
const PORT = process.env.PORT || "3000";

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
  Usuario.findOne({email: request.body.email})
    //En caso de que exista, se verifica, se crea el Token y se logea
    .then((user)=> {
      bcrypt.compare(request.body.password, user.password)
      .then((passwordCheck)=> {
        //Verificacion de pass
        if (!passwordCheck){
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
        response.status(200).send ({
          message: "Login exitoso",
          email: user.email,
          token,
        })
      })
      .catch ((error)=> {
        response.status(400).send({
          message: "Error en contraseña",
          error,
        });
      })
    })
    .catch ((e)=> {
      response.status(404).send({
        message: "No se encuentra el email",
        e,
      })
    })

});


//--- Proteccion de rutas
//ruta libre
app.get("/free-endpoint", (request, response)=> {
  response.json({message: "Usuario libre de acceso"})
});

//ruta autenticada
app.get("/auth-endpoint", auth, (request, response)=> {
  response.json({message: "Contas con autorizacion"})
})


// app.get("/", (req, res) => {
//   res.send("Holaaaaa mundo");
// });

// Define the /autenticar route
// app.post('/api/autenticar', async (req, res) => {
//   // El frontend nos va a enviar usuario/contrasenha { user: "user1", pass: "pass2" }
//   if(req.body.email) {
//       // verificamos que el email exista
//       const emailExistente = await Usuario.find({ email: req.body.email });
//       if(emailExistente){
//           const usuario = req.body.user;
//           // TODO: comparar la contrasena recibida con la guardada en la bd
//           // usar bcrypt.compare()
//           // Crear el token
//           const payload = {
//               usuario,
//               checked: true
//           };
//           const key = app.get('key');
//           try {
//               const token = jwt.sign(payload, key);
//               res.send({
//                   message: 'Token creado',
//                   token
//               });
//           } catch (error) {
//               res.send({
//                   message: 'Hubo un error'
//               })
//           }
//       } else {
//           res.send({message: "El email no existe en nuestros registros"})
//       }
      
//   } else {
//       res.send({message: "No se recibio el user"});
//   }
// });






//------------------------------------------------------------------------
//APIS endpoints
//------------------------------------------------------------------------
//Ruta para autenticar a un usuario y hacer login




// app.post("/api/register", async (req, res) => {
//   try {
//     console.log("Requestbody", req.body);
//     // Chequeamos si el email existe en nuestra base de datos
//     const existingUser = await Usuario.findOne({ email: req.body.email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already exists" });
      
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);

//     // Creamos el objeto usuario desde el modelo Usuario
//     const newUser = new Usuario({
//       email: req.body.email,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "Usuario registrado correctamente" });

//   } catch (error) {
//     console.error("Internal Server Error:", error);

//     res.status(500).json({ error: "Internal server error" });
//   }
// });



// app.post("/api/login", async (req, res) => {
//   try {
//     // Chequeamos si el email existe
//     const user = await Usuario.findOne({ email: req.body.email });
//     if (!user) {
//       return res
//         .status(401)
//         .json({ error: "El email no existe en nuestra base de datos" });
//     }
//     // Comparar las contraseñas
//     const passwordMatch = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!passwordMatch) {
//       return res
//         .status(401)
//         .json({ error: "La contraseña no es correcta" });
//     }
//     const secret = app.get("key");
//     const token = jwt.sign({ email: user.email }, secret);
//     res.status(200).json({ token, ok: true });
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


//Se establece que la app se escuche desde el puerto configurado
app.listen(PORT, () => {
  console.log (`Servidor escuchando en el puerto ${PORT}`)
});
