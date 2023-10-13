const express = require('express')
const Forget = require('../models/forgotModel');

module.exports = {
    verifyOtp: async (req, res) => {
        console.log(req.params,"fsaf",req.query)
        try {
            const { id } = req.params
            const { otp } = req.body;
            console.log(otp, 'otp', id);
            const user = await Forget.findOne({ where:{user_id:id} })
            console.log(user, "userdetaisl")

            if (user.otp == otp) {
                res.status(200).json({ message: 'otp verified successfully' })

            } else {

                res.status(400).json({ message: 'otp is incorrect' })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'otp not verified' })
        }



    }
}