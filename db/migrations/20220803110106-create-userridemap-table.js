'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('userRideMap', { 
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
   });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('userRideMap');
  }
};
