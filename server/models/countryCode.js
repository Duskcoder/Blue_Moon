const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Countries = sequelize.define('Countries',{
    country:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    code:{
      type:DataTypes.STRING,
      allowNull:false,
    }},
    {
      timestamps: false, // Enable timestamps
      createdAt: 'created_at', // Customize the column name for created_at
      updatedAt: 'updated_at', // Customize the column name for updated_at
  })

module.exports =  Countries;
