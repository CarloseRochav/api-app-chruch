'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
const { production: config } = require("../config/config");
//const {db_host,db_database,db_username,db_password}=require("../config/enviromentVars")//Donde esta ubicado la configuracion basica de la base de datos
const db = {};

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);//Objeto de sequelize

// sequelize = new Sequelize(
//   db_database,
//   db_username,
//   db_password,
//   {
//     host:db_host,
//     dialect:'postgres'
//   },
// )


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
