const router=require("express").Router();
const {EventUploadGet,WeeklyEventNewsFeedGet,EventNewsFeedGet,EventUploadPost,CBDEventNewsFeedGet,CPDEventNewsFeedGet}=require('../controllers/EventController');
const {GetAdmin,Getregistration_form,Getcapacity_building,Getcompetitive_programming,Getdevelopment,Getrequests,Getscoreboard,Gettodo,Getevent_request,Getvotes,Getcalendar,GetAdminHallofFame}=require('../controllers/AdminControllers');
const {HallofFamePost,hallofFameGet} = require('../controllers/HallofFameControllers');

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

router.get('/event',EventUploadGet)
router.post('/event/upload', upload.single('picture'), EventUploadPost);
// new
router.get('/capacity_building', Getcapacity_building);
router.get('/competitive_programming', Getcompetitive_programming);
router.get('/development', Getdevelopment);
router.get('/requests', Getrequests);
router.get('/scoreboard', Getscoreboard);
router.get('/todo', Gettodo);
router.get('/event_request', Getevent_request);
router.get('/votes', Getvotes);
router.get('/calendar', Getcalendar);
router.get('/AdminHallofFame', GetAdminHallofFame);
router.get('/registration_form', Getregistration_form);
router.get('/', GetAdmin);

//posts

router.post('/fames/post', upload.single('famephoto'),HallofFamePost)
router.get('/post',hallofFameGet);

module.exports=router;
