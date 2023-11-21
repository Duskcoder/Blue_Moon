const Rooms = require("../models/Rooms");

exports.NewRoom = async (req, res) => {
  try {
    const {
      name,
      description,
      beds,
      restrooms,
      bathtub,
      adults,
      status,
      price,
    } = req.body;
    const imageName = req.file.filename;
    const rooms = await Rooms.create({
      name,
      description,
      beds,
      restrooms,
      bathtub,
      adults,
      status,
      price,
      cover_img: imageName,
    });
    console.log(req.body, "ergeg");
    console.log(req.file, "gegag");
    res.status(200).json(rooms);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      // Sequelize validation error handling
      const validationErrors = error.errors.map((err) => ({
        field: err.path,
        message: err.message,
      }));
      return res.status(422).json({ validationErrors });
    }

    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.country = async (req, res) => {
  try {
    console.log("heeeeeellllo");
    const roomList = await Rooms.findAll();
    console.log(roomList, "hhhhhhh");
    res.status(200).json(roomList);
  } catch (error) {
    // console.error('Error during country:', error);
    console.error("Error stack trace:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
