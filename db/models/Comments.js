const { DataTypes } = require('sequelize'); 
const commentsModel = { 
   id: { 
      primaryKey: true, 
      autoIncrement: true, 
      allowNull: false, 
      type: DataTypes.INTEGER, 
    }, 
    comment: { 
      type: DataTypes.STRING, 
      allowNull: false, 
    }, 
    userId: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
    }, 
    createdAt: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW 
    }, 
    updatedAt: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW 
    } 
} 
 
const commentsOptions = { 
   timestamps: false, 
   schema: 'public', 
   freezeTableName: true, 
 }; 
 
module.exports = (seq) => { 
   return seq.define('Comments', commentsModel, commentsOptions); 
 };