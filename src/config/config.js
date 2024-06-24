require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE, DIALECT, SQL_PORT } = process.env;
module.exports = 
{
  "dev":  {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE,
    "host": DB_HOST,
    "dialect": DIALECT,
    "logging": false,
    "port": SQL_PORT
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE,
    "host": DB_HOST,
    "dialect": DIALECT,
    "logging": false,
    "port": SQL_PORT
  }
}