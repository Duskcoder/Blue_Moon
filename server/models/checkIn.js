// models/userModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const checkIn = sequelize.define('Check', {
  room_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  check_in: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  check_out: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    timestamps: true, // Enable timestamps
    createdAt: 'created_at', // Customize the column name for created_at
    updatedAt: 'updated_at', // Customize the column name for updated_at
});

module.exports = checkIn;
