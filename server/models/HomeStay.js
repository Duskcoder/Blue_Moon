// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const HomeStay = sequelize.define('HomeStay', {
  cover_img: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  beds: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  restrooms: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bathtub: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  adults: {
    type: DataTypes.STRING,
    allowNull: true,
  }, 
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    
  },
  price: {
    type: DataTypes.STRING,
    allowNull: true,
    
  },
},
  {
    timestamps: true, // Enable timestamps
    createdAt: 'created_at', // Customize the column name for created_at
    updatedAt: 'updated_at', // Customize the column name for updated_at
});

module.exports = HomeStay;
