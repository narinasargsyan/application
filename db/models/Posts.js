const { DataTypes } = require('sequelize'); 
 
const postsModel = { 
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
}; 
 
const PostAssociate = (db) =>{ 
  db.Posts.belongsTo(db.Users, { 
    sourceKey: 'userId', 
  }) 
} 
 
const postsOptions = { 
   timestamps: false, 
   schema: 'public', 
   freezeTableName: true, 
 }; 
 
 module.exports = (seq) => { 
  const model = seq.define('Posts', postsModel, postsOptions); 
    model.associate = PostAssociate; 
    return model; 
 };