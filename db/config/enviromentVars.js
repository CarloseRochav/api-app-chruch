if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

//let vars={}
//Variables Configuradas agrupadas en un objeto json
module.exports={
    "db_host":process.env.db_host,
    "db_username":process.env.db_username,
    "db_password":process.env.db_password,
    "db_port":process.env.db_port,
    "db_database":process.env.db_database,
    "node-env":process.env.NODE_ENV
}
//Exportamos ese objeto para su uso predeterminado