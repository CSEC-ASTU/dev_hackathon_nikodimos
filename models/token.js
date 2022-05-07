const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const tokenSchema=new Schema({
    userid:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    token:{
        type:String,
        required:true
    },
   createAt:{
        type:Date,
        default:Date.now,
        expires:3600
    },
    
});

module.exports = mongoose.model("token", tokenSchema);