// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Booking = sequelize.define('Booking', {
  check_in: {
    type: DataTypes.STRING,
    allowNull: true,
    
  },
  check_out: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  adults: {
    type: DataTypes.STRING,
    allowNull: true,
    
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
   phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  }
},
  {
    timestamps: true, // Enable timestamps
    createdAt: 'created_at', // Customize the column name for created_at
    updatedAt: 'updated_at', // Customize the column name for updated_at
});

module.exports = Booking;
