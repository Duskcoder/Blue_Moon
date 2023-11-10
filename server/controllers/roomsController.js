const Rooms = require('../models/Rooms');


exports.NewRoom = async (req,res)=>{
    try {
        const {name,description,beds,restrooms,  bathtub, adults,status,  price} = req.body;
        const imageName = req.file.filename;
        const rooms = await Rooms.create({
            name,description,beds,restrooms,  bathtub, adults,status,  price,
            cover_img:imageName,
        });
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// exports.UpImage= async (req, res) => {
    

//     const imageName = req.file.filename;

//     console.log(imageName, "sfasdfadfadfasf");

//     try {
//       const developer = await Rooms.create(
        
//         { $push: { cover_img: imageName } }, // Push the updated project data into the addProject array
//         { new: true } // To return the updated document
//       );

//       if (!developer) {
//         return res.status(404).json({ success: false, msg: "User not found" });
//       }

//       return res.status(200).json({
//         success: true,
//         msg: "Uploaded successfully",
//         data: developer,
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       return res.status(500).json({ error: error.message });
//     }
//   }

