const HomeStay = require("../models/HomeStay");
const Rooms = require("../models/Rooms");


exports.HomestayNewRoom = async (req,res)=>{
    try {
        const {name,description,beds,restrooms,  bathtub, adults,status,  price} = req.body;
        const imageName = req.file.filename;
        const rooms = await HomeStay.create({
            name,description,beds,restrooms,  bathtub, adults,status,  price,
            cover_img:imageName,
            
        });
        console.log(req.body,'ergeg'); 
        console.log(req.file,'gegag')
        res.status(200).json(rooms);
    }catch (error) {
      if (error.name === 'SequelizeValidationError') {
        // Sequelize validation error handling
        const validationErrors = error.errors.map(err => ({
          field: err.path,
          message: err.message,
        }));
        console.log(error);
        return res.status(200).json({ validationErrors });
      }
  
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

    // console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  };



// exports.HomestayNewRoom = async (req, res) => {
//   try {
//       const { name, description, beds, restrooms, bathtub, adults, status, price } = req.body;
//       const imageName = req.file.filename;

//       // Assuming HomeStay is your Sequelize model
//       const rooms = await HomeStay.create({
//           name, description, beds, restrooms, bathtub, adults, status, price,
//           cover_img: imageName,
//       });

//       console.log(req.body, 'ergeg');
//       console.log(req.file, 'gegag');

//       res.status(200).json(rooms);
//   } catch (error) {
//       if (error.name === 'SequelizeValidationError') {
//           // Sequelize validation error handling
//           const validationErrors = error.errors.map(err => ({
//               field: err.path,
//               message: err.message,
//           }));

//           console.log(error);
//           return res.status(400).json({ validationErrors }); // Correct status code for validation error
//       }

//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// };  // this is chatgpt code 



exports.homestayshow = async (req, res) => {
    try {
      console.log("heeeeeellllo")
      const roomList = await HomeStay.findAll();
      console.log(roomList, "hhhhhhh");
      res.status(200).json(roomList);
    } catch (error) {
      // console.error('Error during country:', error);
      console.error('Error stack trace:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  exports.homestayshow1 = async (req, res) => {

   
    try {
      const {id} = req.params;
      console.log("heeeeeellllo")
      const roomList = await HomeStay.findOne({where:{id:id}});
      console.log(roomList, "hhhhhhh");
      res.status(200).json(roomList);
    } catch (error) {
      // console.error('Error during country:', error);
      console.error('Error stack trace:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  


  exports.homestayOldtoNew = async (req, res) => {
    try {
      const { id } = req.params; // Use req.params.id directly, no need for destructuring
      const { name, description, beds, restrooms, bathtub, adults, status, price } = req.body;
  
      // Update the room using Sequelize's update method
      const result = await HomeStay.update(
        {
          name,
          description,
          beds,
          restrooms,
          bathtub,
          adults,
          status,
          price,
        },
        {
          where: {
            id: id,
          },
        }
      );
  
      res.status(200).json(result);
      console.log(result, "wrjgfqievuygw4loyu2o");
    } catch (error) {
      console.error('Error stack trace:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  exports.homestayImageUpdate = async (req,res)=>{
    try {
      const {id} = req.params;
      const coverImageName = req.file.filename;
      const result = await HomeStay.update({cover_img:coverImageName},{where:{id:id}})
      res.status(200).json(result)
    } catch (error) {
      console.error('Error stack trace:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }




  exports.homestaydelRoom = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id,"gufkwetghwr")
      const result = await HomeStay.destroy({ where: { id: id } });
      console.log(result,'aeghasrthvghytvhrhq');
      res.status(200).json(result);
    } catch (error) {
      console.error('Error stack trace:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  