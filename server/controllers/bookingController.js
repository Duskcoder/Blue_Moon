 const book = require('../models/booking');
const { sendMail } = require('../utils/sendMail');
// const {sendEmail1} = require('../utils/sendMail/sendMail1')

exports.Booking = async (req, res) => {
  try {
    const { check_in, check_out, adults, room_name, name, email, phone, address } = req.body;
    
    // Assuming book.create returns a promise
    const rooms = await book.create({
      check_in, check_out, adults, name, email, phone, address, room_name
    });

    // Send confirmation emails to admin and user
    const adminEmail = ['venuvcodewonders@gmail.com'];
    const adminSubject = 'New Room Booking';
    const adminHtml = `<p>New room booking from ${name}.</p><p>Booking Details:</p><p>Room Name: ${room_name}</p><p>Check-in: ${check_in}, Check-out: ${check_out} </p><p>Contact Info:<br/>Email:${email}<br/>Phone.no: ${phone}</p>`;
    await sendMail(adminEmail, adminSubject, adminHtml);

    const userSubject = 'Room Booking Confirmation';
    const userHtml = '<p>Thank you for booking! We will contact you shortly.</p>';
    await sendMail([email], userSubject, userHtml);

    res.json({ message: 'Booking successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.customer_book= async (req, res) => {
    try {
      console.log("heeeeeellllo")
      const roomList = await book.findAll();
      console.log(roomList, "hhhhhhh");
      res.status(200).json(roomList);
    } catch (error) {
      // console.error('Error during country:', error);
      console.error('Error stack trace:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

   