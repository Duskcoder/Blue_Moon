 const book = require('../models/booking')


 exports.Booking = async (req,res)=>{
    try {
        const {check_in,check_out,adults,room_name,name,email,phone,address} = req.body;
        const rooms = await book.create({
            check_in,check_out,adults,name,email,phone,address,room_name
            
            
        });
        console.log(req.body,'ergeg');
       
        res.status(200).json(rooms);
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

   