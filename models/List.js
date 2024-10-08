const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class List extends Model {}

List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id'
        },
        onDelete: 'CASCADE',
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
  },
  {
 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list',
  }
);

module.exports = List;