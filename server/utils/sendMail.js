const nodeMailer = require('nodemailer');

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,  //true for 465 port // false for 587
    auth: {
      user: 'duskcodertec@gmail.com',
      pass: 'fdyicdgtcwzrwllo'
    }
  });

const sendEmail = async (to, subject, message) => {
    try {
        const mailOptions = {
            from: 'duskcodertec@gmail.com', // sender address
            to: to, // list of receivers
            subject: 'OTP', // Subject line
            text: `Hello ${to.split('@')[0]}`, // plain text body
            html: `This your OTP <b>${subject}</b><br>Thanks and Regards<br>DCrownMart` // html body
          };
  
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

module.exports = {
    sendEmail,
  };