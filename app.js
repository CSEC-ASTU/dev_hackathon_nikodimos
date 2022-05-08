const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const bodyParser=require("body-parser");
const verify=require("./routes/verifyToken");



//Import Routers
const authRoute=require("./routes/auth");
const EventRoute=require("./routes/EventRoute");
const UserRoute=require("./routes/UserRoute");
const HallofFameRoute=require("./routes/HallofFameRoute");


dotenv.config();
// view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

mongoose.connect(process.env.DB_CONNECT,()=>{console.log("Connected to db")})

//Middlewares
app.use(express.static('publics'));
app.use(express.json());


//Middlewares
app.use('/user',authRoute);
app.use('/event',EventRoute);
app.use('/',UserRoute);
app.use('/fames',HallofFameRoute);


app.get('/',(req, res)=>{
	res.render('pages/scoreboard');
})
app.get('/user/home',(req, res)=>{
	res.render('pages/event');
})


app.listen(3000, ()=> console.log("listening on port 3000"))