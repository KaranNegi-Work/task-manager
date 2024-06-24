const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'dev';
const config = require("../config/config")[env];
let dbInstance;

class DbConnection{
    constructor(){
    if(dbInstance){
        return dbInstance;
    }else{
        return this.createConnection()
    }
    }
    createConnection(){
        dbInstance = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect,
            port: config.port,
            logging: false
          });
          return dbInstance
    }
}
module.exports = new DbConnection();