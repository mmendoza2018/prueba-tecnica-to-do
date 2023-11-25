const mysql = require("mysql2");
require("dotenv").config();

const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

const database = {
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT
};

// crear la conexión a la base de datos
const connection = mysql.createConnection(database);

module.exports = connection;
