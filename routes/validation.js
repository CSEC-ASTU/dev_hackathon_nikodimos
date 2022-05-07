const Joi = require("joi");

const authSchema=Joi.object({
	firstname:Joi.string().min(6).required(),
	lastname:Joi.string().min(6).required(),
	username:Joi.string().min(6).required(),
	email:Joi.string().min(6).required().email(),
	phone:Joi.string().min(6).required(),
	password:Joi.string().min(6).required()
});

module.exports =authSchema;