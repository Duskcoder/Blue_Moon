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
      from: from,
      to: to,
      subject: `Booking Confirmation - ${subject.room_name} - ${customer}`,
      text: `Hello Admin, ${customer} has booked the ${subject.room_name} room from ${check_in} to ${check_out}.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3498db;">Booking Confirmation</h2>
          <p>
            <strong>${customer}</strong> has booked the ${subject.room_name} room from ${check_in} to ${check_out}.
          </p>
          
          <p>
            Customer's Email: ${from}
          </p>
        </div>
      `
    }  
     await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  }
    catch (error) {
      console.error('Error sending email:', error);
    }
  };

module.exports = {
  sendEmail,
};
