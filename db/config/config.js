const {
  db_host,
  db_username,
  db_password,
  db_port,
  db_database
} = require('./enviromentVars');


module.exports={
  "development": {
    "username":db_username,
    "password": db_password,
    "database": db_database,
    "host": db_host,
    "dialect": "postgres"
  },  
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username":db_username,
    "password": db_password,
    "database": db_database,
    "host": db_host,
    "dialect": "postgres"
  }
}
