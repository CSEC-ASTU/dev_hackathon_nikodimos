const mongoose = require('mongoose');


const eventSchema =new mongoose.Schema({
	//id is generated automatically by the mongoDB
	title:{
		type:String,
		required:true
	},
	event_content:{
		type:String,
	},
	category:{
		type:String,
	},
	posted_by:{
		type:String,
	},
	is_deleted:{
		type:Number
		},
	deleted_at:{
		type:Date
	},
	deleted_by:{
		type:String
	},
	approved_by:{
		type:String
	},
	approved_at:{
		type:Date
	},
	approved_status:{
		type:Number
	}
// -created_at
// -updated_at   MongoDB itself have default for this values
})

module.exports=mongoose.model("Event",eventSchema);