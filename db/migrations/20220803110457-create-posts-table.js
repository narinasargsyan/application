'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('Posts', { 
      userId:{ 
          type: DataTypes.INTEGER, 
          allowNull: false, 
      }, 
     id: { 
        allowNull: false, 
        primaryKey: true, 
        type: DataTypes.INTEGER 
      }, 
      title: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
      body: { 
        type: DataTypes.STRING, 
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
    await queryInterface.dropTable('Posts');
  }
};
