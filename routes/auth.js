const router=require("express").Router();
const User = require("../models/User");

router.post('/register', async (req, res) => {
	const user=new User({
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		username:req.body.username,
		email:req.body.email,
		phone:req.body.phone,
		password:req.body.password,
		profilephoto:req.body.profilephoto,
		is_admin:0,
		is_devhead:0,
		is_cpdhead:0,
		is_cbdhead:0,
		is_devmember:0,
		is_cpdmember:0,
		is_cbdmember:0,
		subscription_status:0,
		is_deleted:0,
		deleted_at:null,
		deleted_by:null,
		approved_by:null,
		approved_at:null,
		approved_status:0
	});

	try{
		const savedUser=await user.save();
		res.send(savedUser);
	}catch(err){
		res.status(400).send(err.message);
	}
});



module.exports=router;