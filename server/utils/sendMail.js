const nodeMailer = require("nodemailer");

  const transporter = nodeMailer.createTransport({
    service:"gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,  //true for 465 port // false for 587
    auth: {
      user: 'duskcodertec@gmail.com',
      pass: 'fdyicdgtcwzrwllo'
    }
  });

  const sendMail = (to, subject, html) => {
    const mailOptions = {
      from: 'duskcodertec@gmail.com',
      to: to.join(', '), // Join the array of recipients into a comma-separated string
      subject,
      html,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };
  
  module.exports = { sendMail };
