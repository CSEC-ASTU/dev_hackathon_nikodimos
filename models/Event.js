const mongoose = require('mongoose');


const eventSchema =new mongoose.Schema({
	//id is generated automatically by the mongoDB
	title:{
		type:String,
		required:true
	},
	event_photo:{
		data:Buffer,
		type:String,
		required:'have to be filled'
	},
	event_content:{
		type:String,
	},
	is_scoreboard:{
		type:Number
	},
	category:{
		type:String,
	},
	tag:{
		type:String
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
},{
  timestamps: true
})

module.exports=mongoose.model("Event",eventSchema);