const { DataTypes } = require('sequelize'); 
const addressModel = { 
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
    
};
 
const addressOptions = { 
   timestamps: false, 
   schema: 'public', 
   freezeTableName: true, 
 }; 
 
 const AddressAssociate = (db) =>{ 
    db.Address.hasMany(db.Users, { 
        foreignKey: 'addressId', 
    }) 
} 
module.exports = (seq) => { 
    const model = seq.define('Address', addressModel, addressOptions); 
    model.associate = AddressAssociate; 
    return model; 
 };