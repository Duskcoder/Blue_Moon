// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Rooms = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  beds: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  restrooms: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bathtub: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adults: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    timestamps: true, // Enable timestamps
    createdAt: 'created_at', // Customize the column name for created_at
    updatedAt: 'updated_at', // Customize the column name for updated_at
});

module.exports = Rooms;
