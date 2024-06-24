const { DataTypes } = require('sequelize');
const dbConnection = require('./DbConnection');
const tableName = "tbl_tasks";

const tableFields =  {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
};

const tableOptions = {
    timestamps: true
}


const Task  = dbConnection.define(tableName, tableFields, tableOptions)

module.exports = Task;
