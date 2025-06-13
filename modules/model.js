const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Post = sequelize.define("Post", {
  userId: DataTypes.INTEGER, 
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  title: DataTypes.STRING,
  body: DataTypes.STRING
}, {
  tableName: "postsSSS",       
  
});

module.exports = Post;