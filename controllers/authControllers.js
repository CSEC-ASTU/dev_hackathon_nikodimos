const User = require("../models/User");
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");

var postRegister = async (req, res) => {
		    // Finds the validation errors in this request and wraps them in an object with handy functions
		if (req.body.email.length<=5) {
		return res.status(400).send("please Provide the correct email");
		}
		if(!req.body.password===req.body.confirmpassword){
			return res.redirect('/register')
		}
		var cpd =0;
		var dev =0;
		if(req.body.divisionName==='1'){
			cpd=1;
			dev=0;
		}else if(req.body.divisionName==='2'){
			cpd=0;
			dev=1;
		}else if(req.body.divisionName==='3'){
			cpd=1;
			dev=1;
		}
		// ??check if email already exists
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
			profilephoto:null,
			is_admin:0,
			is_devhead:0,
			is_cpdhead:0,
			is_cbdhead:0,
			is_devmember:dev,
			is_cpdmember:cpd,
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
			console.log(savedUser);
		}catch(err){
			res.redirect('/')
			// res.status(400).send(err.message);
			console.log("error Occured")
	}};

const postLogin=async (req, res)=>{
	//validation here is
	//check if email exists
	const user=await User.findOne({email:req.body.email}); 
	if(!user) return res.status(400).send("Email or password is wrong");
	//password is correct
	const validPass=await bcrypt.compare(req.body.password,user.password);
	if(!validPass) return res.status(400).send("Invalid Password");
	const token=jwt.sign({_id:user.id },process.env.TOKEN_SECRET);
	res.cookie('jwt', token, { httpOnly: true, maxAge: 11* 1000 });
	res.header("auth-token", token).redirect('/event/newsFeed');
};

const postLogout=(req, res) => {
	req.header("auth-token", "");
	res.send("Logged Out Succesfully");
};


module.exports.postRegister=postRegister;
module.exports.postLogin=postLogin;
module.exports.postLogout=postLogout;