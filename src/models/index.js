const config = require('../config/config.js')[process.env.NODE_ENV || 'dev'];
const connection = require("./DbConnection.js");
const task = require("./task.js")
const db = {
  connection,
  task
}


module.exports = db;

