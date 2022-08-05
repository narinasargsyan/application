const { DataTypes} = require('sequelize'); 
const { db } = require('../../config/configs'); 
const userModel = { 
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
      type: DataTypes.DATEONLY, 
      allowNull: true, 
    }, 
    phone:{ 
      type: DataTypes.STRING, 
      allowNull: false, 
    }, 
    website:{ 
      type: DataTypes.STRING, 
      allowNull: true, 
    }, 
    username:{ 
      type: DataTypes.STRING, 
      allowNull: true, 
    }, 
    createdAt: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW, 
    }, 
    updateAt:{ 
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW 
    } 
  }; 
   
  const usersOptions = { 
    timestamps: false, 
    schema: 'public', 
    freezeTableName: true, 
  }; 
 
  const UserAssociate = (db) =>{ 
 
    db.Users.belongsToMany(db.Rides,{through: db.UserRideMap}); 
    db.Users.hasMany(db.Comments, { 
      foreignKey: 'userId', 
    }) 
    db.Users.hasMany(db.Posts, { 
      foreignKey: 'userId', 
    }) 
 
    db.Users.belongsTo(db.Company, { 
      foreignKey: 'companyId', 
    }) 
 
    db.Users.belongsTo(db.Address, { 
      foreignKey: 'addressId', 
    }) 
  } 
   
  module.exports = (seq) => { 
    const model = seq.define('Users', userModel, usersOptions); 
    model.associate = UserAssociate; 
    return model; 
  };