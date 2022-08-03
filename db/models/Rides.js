const { DataTypes } = require('sequelize'); 
 
const ridesModel = { 
   id: { 
      allowNull: false, 
      autoIncrement: true, 
      primaryKey: true, 
      type: DataTypes.INTEGER 
    }, 
    driverName: { 
      type: DataTypes.STRING, 
      allowNull: false, 
    }, 
    driverVehicle: { 
      type: DataTypes.STRING, 
      allowNull: false, 
    }, 
    startLong: { 
      type: DataTypes.FLOAT, 
      allowNull: false, 
    }, 
    startLat: { 
      type: DataTypes.FLOAT, 
      allowNull: false, 
    }, 
    endLat: { 
      type: DataTypes.FLOAT, 
      allowNull: false, 
    }, 
    endLong: { 
      type: DataTypes.FLOAT, 
      allowNull: false, 
    }, 
    rideComment: { 
      type: DataTypes.STRING, 
      allowNull: true, 
    }, 
    createdAt: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW 
    }, 
    updatedAt: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW 
    } 
}; 
 
const ridesOptions = { 
   timestamps: false, 
   schema: 'public', 
   freezeTableName: true, 
 }; 
 
 module.exports = (seq) => { 
   return seq.define('Rides', ridesModel, ridesOptions); 
 };