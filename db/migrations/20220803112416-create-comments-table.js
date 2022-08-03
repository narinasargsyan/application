'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
     await queryInterface.createTable('Comments', { 
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
   });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};
