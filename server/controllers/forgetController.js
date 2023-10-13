const Forget = require('../models/forgotModel');
const User = require('../models/userModel');
const otpGenerator = require("otp-generator");
const { sendEmail } = require('./../utils/sendMail');

exports.forgot = async (req, res) => {
    const otp = otpGenerator.generate(6, {
        digits: true,
        specialChars: false,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false
    });
    
    try {
    const {email}= req.body;
    console.log(email,"email");
    await User.findOne({ where: { email: email } }).then(async (user) => {
      if (user) {
        // User found, update the name
        
        await Forget.upsert({user_id:user.id, otp:`${otp}`}).then(([user, created]) => {
          
          console.log(user.user_id,"user");
            if (created) {
              // New user created
              res.status(200).json({user_id:user.user_id,message: 'OTP sent successfully'})
            } else {  
              // User updated
              res.status(200).json({user_id:user.user_id,message: 'OTP sent successfully'})

            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          
        } else {
          // User not found
          res.status(404).json({message:'User not found'});
        }
        await sendEmail(email, otp, 'message');
      })
      
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



      
