const { DataTypes } = require('sequelize'); 
 
const UserRideModel = { 
   id: { 
      allowNull: false, 
      autoIncrement: true, 
      primaryKey: true, 
      type: DataTypes.INTEGER 
    }, 
     
    UserId: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      references: { 
        model: { 
          tableName:"Users", 
          schema: 'public' 
        }, 
        key: 'id' 
      } 
    }, 
    RideId: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      references: { 
        model: { 
          tableName:"Rides", 
          schema: 'public' 
        }, 
        key: 'id' 
      } 
    } 
}; 
 
const UserRideOptions = { 
   timestamps: false, 
   schema: 'public', 
   freezeTableName: true, 
 }; 
 
 module.exports = (seq) => { 
   return seq.define('UserRideMap', UserRideModel, UserRideOptions); 
 };