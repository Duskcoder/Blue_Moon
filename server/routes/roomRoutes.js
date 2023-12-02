const express = require('express');
const  router = express.Router();
const roomController = require('../controllers/roomsController');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  });

const upload = multer({ storage: storage });

router.post("/room", upload.single("cover_img"),  roomController.NewRoom);

// router.post('/room', roomController.NewRoom);

router.get('/showroom',roomController.country);
router.get('/showroom/:id',roomController.country1);
router.put('/room/:id' ,roomController.OldtoNew)
router.put('/image/update/:id',upload.single("cover_img"),roomController.ImageUpdate)
router.delete('/room/delete/:id',roomController.delRoom)
module.exports = router;  