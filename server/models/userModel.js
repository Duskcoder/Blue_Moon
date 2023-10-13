// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    timestamps: true, // Enable timestamps
    createdAt: 'created_at', // Customize the column name for created_at
    updatedAt: 'updated_at', // Customize the column name for updated_at
});

module.exports = User;
