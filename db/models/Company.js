const { DataTypes } = require('sequelize'); 
const companyModel = { 
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
} 
 
const companyOptions = { 
   timestamps: false, 
   schema: 'public', 
   freezeTableName: true, 
 }; 
 
 const CompanyAssociate = (db) =>{ 
    db.Company.hasMany(db.Users, { 
      foreignKey: 'companyId', 
    }) 
  } 
 
module.exports = (seq) => { 
    const model = seq.define('Company', companyModel, companyOptions); 
    model.associate = CompanyAssociate; 
    return model; 
     
 };