 const book = require('../models/booking');
const { sendEmail } = require('../utils/sendMail');


 exports.Booking = async (req,res)=>{
    try {
        const {check_in,check_out,adults,room_name,customer_name,email,phone,address} = req.body;
        const rooms = await book.create({
            check_in,check_out,adults,customer_name,email,phone,address,room_name
            
            
        });
        // console.log(req.body,'ergeg');
       console.log(rooms,'wsviuwgvweiufgtwuetgf')
        res.status(200).json(rooms);
        sendEmail(check_in,check_out,room_name,customer_name,email)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

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

   