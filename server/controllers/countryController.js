const express = require('express');
const dotenv = require('dotenv');

const Countries = require('../models/countryCode')


exports.country = async (req, res) => {
  try {
    console.log("heeeeeellllo")
    const countryList = await Countries.findAll();
    console.log(countryList,"hhhhhhh");
    res.status(200).json(countryList);
  } catch (error) {
    // console.error('Error during country:', error);
    console.error('Error stack trace:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
