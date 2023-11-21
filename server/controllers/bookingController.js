 const book = require('../models/booking')


 exports.Booking = async (req,res)=>{
    try {
        const {check_in,check_out,adults,name,email,phone,address} = req.body;
        const rooms = await book.create({
            check_in,check_out,adults,name,email,phone,address
            
            
        });
        console.log(req.body,'ergeg');
       
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
   