'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
     await queryInterface.createTable('Users', { 
      id: { 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false, 
        type: DataTypes.INTEGER, 
      }, 
      companyId: { 
        allowNull: true, 
        type: DataTypes.INTEGER, 
      }, 
      addressId:{ 
        allowNull: true, 
        type: DataTypes.INTEGER, 
      }, 
      name: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
      surname: { 
        type: DataTypes.STRING, 
        allowNull: true, 
      }, 
      email: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
      password: { 
        type: DataTypes.STRING, 
        allowNull: true, 
      }, 
      birthdate: { 
        type: DataTypes.DATE, 
        allowNull: true, 
      }, 
      phone:{ 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
      website:{ 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
      username:{ 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
      createdAt: { 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW, 
      }, 
      updateAt:{ 
          type: DataTypes.DATE, 
          defaultValue: DataTypes.NOW 
      } 
    }); 
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('Users');
  }
};
