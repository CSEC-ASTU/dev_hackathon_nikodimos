const router=require("express").Router();
const {hallofFamesListGet} = require('../controllers/HallofFameControllers');

router.post('/home', (req,res) => {
	res.render('pages/userNewsFeed');
})

router.get('/list', hallofFamesListGet);
module.exports=router;