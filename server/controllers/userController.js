// controllers/userController.js
const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require('../models/userModel');
const Forget = require('../models/forgotModel');

exports.register = async (req, res) => {
  try {
    let password = '';
    
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        if (err) {
          console.error('Error hashing password:', err);
    res.status(400).json("error");

          return;
        }
        password = hash;
        req.body.password = password;

        const users=req.body
        console.log(users,"jhxzchkhckjzhkcjhzxck")
        const newUser = await User.create(users);

         
        const userId = newUser.id; 
        const customId = `CW${userId.toString().padStart(4, '0')}`;
  
        // Update the user with the custom ID
        await newUser.update({user_address:customId});
      
      let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: newUser.id,
    }
    
    const token = jwt.sign(data, jwtSecretKey);
      res.status(201).json({user_detail:newUser, token:token});
        // Store 'hash' in the database
      });
      
  } catch (error) {
    res.status(400).json("error");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// login

exports.login = async (req, res) => {
    try {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ where: { email } });
  
      // If the user doesn't exist, return an error
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }
  
      // Compare the entered password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        // Passwords match, generate a JWT
        const token = jwt.sign({ userId: user.id }, jwtSecretKey, { expiresIn: '1h' });
  
        res.status(200).json({ message: 'Login successful', token, user_detail: user });
      } else {
        // Passwords do not match
        res.status(404).json({ error: 'Invalid password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Login failed' });
    }
};

exports.updatePassword = async (req, res) => {
  const { email, cpassword } = req.body;
  console.log(email);
  try {
    // Hash the new password
    const newPassword = await bcrypt.hash(cpassword, saltRounds);

    // Update the user's password in the database
    const [updateCount] = await User.update(
      { password: newPassword },
      { where: { email: email } }
    );

    if (updateCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userRecord = await User.findOne({ where: { email: email } })
    await Forget.destroy({where:{user_id:userRecord.id}});
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error during password update:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Implement more controller methods for other routes/actions
