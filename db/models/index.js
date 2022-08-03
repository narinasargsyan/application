const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { dbConfigs } = require('../../config/configs.js');

const baseName = path.basename(__filename);
console.log('dbConfig', dbConfigs)
const db = {};

const sequelize = new Sequelize(dbConfigs.name, dbConfigs.username, dbConfigs.password, {
    dialect: dbConfigs.dialect
});


fs.readdirSync(__dirname)
  .filter((file) => !file.startsWith('.') && file !== baseName && file.endsWith('.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = sequelize;

sequelize
  .authenticate()
  .then(() => console.log('database is connected'))
  .catch((err) => {
    throw err;
  });

module.exports = db;