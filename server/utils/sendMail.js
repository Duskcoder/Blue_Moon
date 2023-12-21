const nodeMailer = require('nodemailer');

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

const sendEmail = async (check_in,check_out,customer_name,room_name,email) => {
  const subject={
    check_in:check_in,
    check_out:check_out,
    room_name:room_name,
  }
  const from =email;
  const to = "venuvcodewonders@gmail.com";
  const customer=customer_name;
    try {
        const mailOptions = {
            from: from, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: `Hello ${to.split('@')[0]}`, // plain text body
            html: `${subject.room_name} room   is booked by ${customer} from ${check_in} to ${check_out} ` // html body
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