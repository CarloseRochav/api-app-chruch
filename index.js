const express = require("express");
const app = express();//Servidor
const{sequelize}=require("./db/models/index")
const usuarioRoute = require('./src/routes/usuario.route');

//Puerto
const port = process.env.PORT || 3000;


//Uso de bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//< - - Muy importante para poder recibir json


//Rutas con las cual se va a trabajar
app.use(usuarioRoute);

//Servidor escuchando
app.listen(port,"0.0.0.0",()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);

    //Configuracion con sequelize

    sequelize
.authenticate()
.then(() => {
  console.log("Connected to the database.");
})
.catch((err) => {
  console.error("Unable to connect to database:", err);
});
})









