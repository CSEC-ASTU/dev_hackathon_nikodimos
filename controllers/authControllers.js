const User = require("../models/User");
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");


var registerController = async (req, res) => {
		    // Finds the validation errors in this request and wraps them in an object with handy functions
		if (req.body.email.length<=5) {
		return res.status(400).send("please Peovide the correct email" + req.body.email);
		}

		//check if email already exists
		
		const EmailExist=await User.findOne({email:req.body.email}); 
		if(EmailExist) return res.status(400).send("email already exists");
		//hash password
		const salt=await bcrypt.genSalt(10);
		const hashedPassword=await bcrypt.hash(req.body.password, salt);

		const user=new User({
			firstname:req.body.firstname,
			lastname:req.body.lastname,
			username:req.body.username,
			email:req.body.email,
			phone:req.body.phone,
			password:hashedPassword,
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
			res.send(savedUser );
		}catch(err){
			res.status(400).send(err.message);
	}};

const loginController=async (req, res)=>{
	//validation here is
	//check if email exists
	const user=await User.findOne({email:req.body.email}); 
	if(!user) return res.status(400).send("Email or password is wrong");
	//password is correct
	const validPass=await bcrypt.compare(req.body.password,user.password);
	if(!validPass) return res.status(400).send("Invalid Password");
	const token=jwt.sign({_id:user.id },process.env.TOKEN_SECRET);
	res.header("auth-token", token).send(token);
};

const logoutController=(req, res) => {
	req.header("auth-token", "");
	res.send("Logged Out Succesfully");
};


module.exports.registerController=registerController;
module.exports.loginController=loginController;
module.exports.logoutController=logoutController;