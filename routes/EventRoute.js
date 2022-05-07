const router=require("express").Router();
const {EventUploadGet,EventUploadPost}=require('../controllers/EventController');
const multer=require('multer');


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




router.get('/upload',EventUploadGet)
router.post('/upload', upload.single('picture'), EventUploadPost);


module.exports=router;
