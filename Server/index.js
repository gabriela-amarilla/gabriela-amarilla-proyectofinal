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
const { CgPassword } = require("react-icons/cg");



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

app.use(
    cors(corsOptions)
);
//Configuramos un puerto especifico desde una variable de entorno
//Si no existe entonces asignamos el peurto 3001
const PORT = process.env.PORT || "3001";

//Configurar CORS para acceder desde el frontend
var corsOptions = {
    origin:"*",
    optionsSuccessStatus: 200,
};

//Hacemos que nuestra aplicacion escuche el puerto que configuramos
//con el metodo listen (puerto, callback)
app.listen(PORT, () => {
  console.log (`Servidor escuchando en el puerto ${PORT}`)
})

//Conexion a MongoDB con Mongoose
const uri = `mongodb+srv://${process.env.DB_USUARIO}:${process.env.DB_PASSWORD}@${process.env.DB_DOMAIN}/${process.env.DB_NAME}&appName=${process.env.DB_CLUSTER}`;

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

//------------------------------------------------------------------------
//APIS endpoints
//------------------------------------------------------------------------
//Ruta para autenticar a un usuario y hacer login
app.post("/api/register", async (req, res) => {
  try {
    // Chequeamos si el email existe en nuestra base de datos
    const existingUser = await Usuario.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Creamos el objeto usuario desde el modelo Usuario
    const newUser = new Usuario({
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});



app.post("/api/login", async (req, res) => {
  try {
    // Chequeamos si el email existe
    const user = await Usuario.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(401)
        .json({ error: "El email no existe en nuestra base de datos" });
    }
    // Comparar las contraseñas
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ error: "La contraseña no es correcta" });
    }
    const secret = app.get("key");
    const token = jwt.sign({ email: user.email }, secret);
    res.status(200).json({ token, ok: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});



