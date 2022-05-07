const mongoose = require('mongoose');

const hallOfFameSchema =new mongoose.Schema({
		//id is generated automatically by the mongoDB
	firstname:{
		type:String,
		required:true,
		min: 6,
		max:255
	},
	lastname:{
		type:String,
		required:true,
		min: 6,
		max:255
	},
	gender:{
		type:String
	},
	division:{
		type:String
	},
	year:{
		type:Number
	},
	famephoto:{
		type:String
	},
	famedescription:{
		type:String
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
},{
  timestamps: true
})

module.exports =mongoose.model("HallOfFame",hallOfFameSchema);