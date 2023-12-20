const express = require('express');
const  router = express.Router();
const HomeStayController = require('../controllers/HomeStayController');
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

router.post("/rooms", upload.single("cover_img"),  HomeStayController.HomestayNewRoom);

// router.post('/room', roomController.NewRoom);

router.get('/showrooms',HomeStayController.homestayshow);
router.get('/showrooms/:id',HomeStayController.homestayshow1);
router.put('/rooms/:id' ,HomeStayController.homestayOldtoNew)
router.put('/image/updates/:id',upload.single("cover_img"),HomeStayController.homestayImageUpdate)
router.delete('/room/deletes/:id',HomeStayController.homestaydelRoom)
module.exports = router;  