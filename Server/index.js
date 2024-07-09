//----------------------------------------------------------------------------
// + Importacion paquetes
//----------------------------------------------------------------------------

//Importar y configurar dotenv para las variables de entorno
require("dotenv").config();


//Hacemos el import de express.js
const express = require("express");

//1- Importar jsonwebtoken
const jwt = require("jsonwebtoken");

//Hacer el import del middleware CORS!
const cors = require("cors");

//Hacemos el import de nuestro archivo de configuracion de jwt
const jwtConfig = require("../jwt.config");

//Hacemos el import de mongoose y bcrypt
const mongoose = require("mongoose");



//----------------------------------------------------------------------------
// + Configuracion e inicializacion
//----------------------------------------------------------------------------


//Creamos nuestra app backend con el metodo express()
const app = express();

//2- Configurar nuestro secret
app.set("key", jwtConfig.clave)

//3- BodyParser y express.json()
//Activar el middleware express.json
app.use(express.json());

//Configuramos un puerto especifico desde una variable de entorno
//Si no existe entonces asignamos el peurto 3001
const PORT = process.env.PORT || "3001";

//Password de BD
const password = process.env.DB_PASS ||  "xqQiXKazZv1BpfoI"; 

//Configurar CORS para acceder desde el frontend
var corsOptions = {
    origin:"*",
    optionsSuccessStatus: 200,
};



//4- Nueva escucha post (/autenticar) que responda un token a nuestro front end
// app.post('/autenticar', (req, res) => {
//     //El frontend nos va a enviar usuario/contraseña {user: "user 1", pass: "pass2"}
//     if (req.body.user) {
//     const usuario = req.body.user;
//     //creaer el token
//     const payload = {
//         usuario,
//         checked: true
//     };
//     const key = app.get('key');
//     try {
//         const token = jwt.sing(payload, key);
//         res.send ({
//             message: 'Token creado',
//             token
//         });

//     } catch (error) {
//         res.send({
//             message: 'Hubo un error'
//         })
//     }
//     }
    
// })

//Escuchar solicitud POST desde nuestro frontend en la ruta "/tarea"
app.post('/', (req, res)=>{
    console.log("Body de mi reques",req.body);
    if (req.body) {
        res.send({message: "Recibimos tu tarea."})
    } else {
        res.send({message: "No recibimos tu tarea"})
    }
    
});



//Actviamos CORS para todas las solicitudes
app.use(
    cors(corsOptions)
);

//Hacemos que nuestra aplicacion escuche el puerto que configuramos
//con el metodo listen (puerto, callback)
app.listen(PORT, () => {
    console.log (`Servidor escuchando en el puerto ${PORT}`)
})


//Conexion a MongoDB con Mongoose
const uri = `mongodb+srv://gabrielaamarillag:${password}@cluster0.h6m7mnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

//----------