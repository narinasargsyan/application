'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('Company', { 
      id: { 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false, 
        type: DataTypes.INTEGER, 
      }, 
      name: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
      catchPhrase: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
      bs: { 
          type: DataTypes.STRING, 
          allowNull: false, 
      }, 
  });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Company');
  }
};
