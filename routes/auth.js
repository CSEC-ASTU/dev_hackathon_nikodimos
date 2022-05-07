const router=require("express").Router();
const {registerController,loginController,logoutController}=require('../controllers/authControllers')

// const schema={
// 	firstname:Joi.string().min(6).required(),
// 	lastname:Joi.string().min(6).required(),
// 	username:Joi.string().min(6).required(),
// 	email:Joi.string().min(6).required().email(),
// 	phone:Joi.string().min(6).required(),
// 	password:Joi.string().min(6).required()
// }

router.post('/register',registerController);
router.post('/login',loginController);
router.post('/logout', logoutController);



module.exports=router;