const router=require("express").Router();

router.post('/home', (req,res) => {
	res.render('pages/userNewsFeed');
})

module.exports=router;