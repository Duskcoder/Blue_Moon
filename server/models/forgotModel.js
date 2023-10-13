const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = require('../config');

const Forgot = sequelize.define('Forgot', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  otp: {
    type: DataTypes.STRING,
    allowNull: false,
  }},
  {
    timestamps: true, // Enable timestamps
    createdAt: 'created_at', // Customize the column name for created_at
    updatedAt: 'updated_at', // Customize the column name for updated_at
});

module.exports = Forgot;
