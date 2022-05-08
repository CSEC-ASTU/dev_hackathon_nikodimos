const router=require("express").Router();
const {WeeklyEventNewsFeedGet,EventNewsFeedGet,CBDEventNewsFeedGet,CPDEventNewsFeedGet}=require('../controllers/EventController');

router.get('/newsFeed',EventNewsFeedGet);
router.get('/newsFeed/week', WeeklyEventNewsFeedGet)
router.get('/newsFeed/cbd', CBDEventNewsFeedGet);
router.get('/newsFeed/cpd', CPDEventNewsFeedGet);

module.exports=router;
