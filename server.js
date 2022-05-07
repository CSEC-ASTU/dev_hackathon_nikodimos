const express=require ('express');
const mongoose=require ('mongoose');
const app=express();
const ejs=require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://nikodimos:nikodimos@cmsdb.ujpl5.mongodb.net/users?retryWrites=true&w=majority',()=>console.log("database connected"));
 
app.use(express.static('assets'));

const usersSchema ={
    firstname:String,
    lastname:String,
    username:String,
    email:String,
    phone:String,
    password:String,
    profilephoto:String,
}
const User=mongoose.model('User','usersSchema');

app.get('/' ,(req,res)=>{
   User.find({},function(users){
       res.render('profile',{
           UsersList:users

       })
        
})
})
app.get('/' ,(req,res)=>{
    res.render('profile')
})
 app.listen(3000, function(){
     console.log("server listening")
 })