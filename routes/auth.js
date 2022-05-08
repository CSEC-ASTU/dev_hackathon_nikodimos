const router=require("express").Router();
const {postRegister,postLogin,postLogout}=require('../controllers/authControllers')

// const schema={
// 	firstname:Joi.string().min(6).required(),
// 	lastname:Joi.string().min(6).required(),
// 	username:Joi.string().min(6).required(),
// 	email:Joi.string().min(6).required().email(),
// 	phone:Joi.string().min(6).required(),
// 	password:Joi.string().min(6).required()
// }

router.post('/home',postRegister);
router.post('/login',postLogin);
router.post('/logout', postLogout);


module.exports=router;