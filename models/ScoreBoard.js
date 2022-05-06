const mongoose = require('mongoose');


const scoreBoardSchema =new mongoose.Schema({
	//id is generated automatically by the mongoDB
	title:{
		type:String,
		required:true
	},
	scorephoto:{
		type:String,
		required:true
	},
	divisionname:{
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
	// created_at:{},
	// updated_at:,   Mongo DB timestamp values by default it inserts it.
})

module.exports=mongoose.model('ScoreBoard',scoreBoardSchema);