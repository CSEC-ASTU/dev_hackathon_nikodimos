const router=require("express").Router();
const multer=require('multer');
const {HallofFamePost,hallofFameGet,hallofFamesListGet} = require('../controllers/HallofFameControllers');


const storage =multer.diskStorage({

  //destination for the files
  destination: function (req, file,callback){
    callback(null,'./publics/uploads/images');
  },

  //add back the extension
  filename:function (req,file,callback){
    callback(null,Date.now()+file.originalname)
  },
});

//upload parameter for multer
const upload=multer({
  storage:storage,
  limits:{
    fieldSize:1024*1024*3,
  },
});

router.post('/post', upload.single('famephoto'),HallofFamePost)
router.get('/post',hallofFameGet)
router.get('/list', hallofFamesListGet);

module.exports=router;