const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
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
	username:{
		type:String,
		required:true,
		min: 6,
		max:255
	},
	email:{
		type:String,
		required:true,
		min: 6,
		max:255
	},
	phone:{
		type:String,
		min: 6,
	},
	password:{
		type:String,
		required:true,
		min: 6,
		max:1024
	},
	profilephoto:{
		type:String
	},
	is_admin:{
		type:Number
		},
	is_devhead:{
		type:Number
		},
	is_cpdhead:{
		type:Number
		},
	is_cbdhead:{
		type:Number
		},
	is_devmember:{
		type:Number
		},
	is_cpdmember:{
		type:Number
		},
	is_cbdmember:{
		type:Number
		},
	subscription_status:{
		type:Number
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

module.exports=mongoose.model('User',userSchema);