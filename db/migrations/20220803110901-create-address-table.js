'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('Address', { 
      id: { 
         primaryKey: true, 
         autoIncrement: true, 
         allowNull: false, 
         type: DataTypes.INTEGER, 
       }, 
       street: { 
         type: DataTypes.STRING, 
         allowNull: false, 
       }, 
       suite: { 
         type: DataTypes.STRING, 
         allowNull: false, 
       }, 
       city: { 
           type: DataTypes.STRING, 
           allowNull: false, 
       }, 
       zipcode:{ 
           type: DataTypes.STRING, 
           allowNull: false, 
       }, 
       geo:{ 
           type: DataTypes.STRING, 
           allowNull: false, 
       }, 
       
   });
 },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Address');
  }
};
