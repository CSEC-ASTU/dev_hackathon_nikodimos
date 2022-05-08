const Event= require('../models/Event')

function currentDate()
{
	let  today 		= new Date();
	let  dd 		= String(today.getDate()).padStart(2, '0');
	return dd;
}

function getMonth()
{
	let  today 		= new Date();
	let  mm 		= String(today.getMonth() + 1).padStart(2, '0'); 
	return  mm;
}

function getYear()
{
	let  today 		= new Date();
	let  yyyy 		= today.getFullYear();
	return yyyy;
}

function lastweek(){
    date =(currentDate()-7)
    Month = getMonth()
    if(date<=0){
        date = 30 - date
        Month--
    }
	return getYear() + "-" + Month + "-" + date.toString()
}




const EventUploadGet=(req, res) => {
	res.render("pages/event")
}

const EventUploadPost=async(req, res) => {
	const event=new Event({
		title:req.body.title,
		event_photo:req.file.filename,
		event_content:req.body.event_content,
		is_scoreboard:req.body.scoreboard,//checkbox
		tag:req.body.tag,
		category:req.body.category,
		posted_by:'Admin',
		is_deleted:0,
		deleted_at:null,
		deleted_by:null,
		approved_by:"Admin",
		approved_at:Date.now(),
		approved_status:1
	});
	try{
		const savedEvent=await event.save();
		console.log(savedEvent)
		res.redirect('/event/upload');
	}catch(err){
			res.status(400).send(err.message);
}};

const EventNewsFeedGet =async (req, res) => {
	Event.find().then(result=>{ res.render('pages/userNewsFeed', { events:result});})
};
const WeeklyEventNewsFeedGet =async (req, res) => {
//	Event.find({'createdAt':{$gte:ISODate(lastweek()),$lt:ISODate(Date.now())}}).then(result=>{ res.render('pages/userNewsFeed', { events:result})})
};

const DEVEventNewsFeedGet =async (req, res) => {
	Event.find({tag: "DEV"}).then(result=>{ res.render('pages/userNewsFeed', { events:result})})
};

const CBDEventNewsFeedGet =async (req, res) => {
	Event.find({tag: "CBD"}).then(result=>{ res.render('pages/userNewsFeed', { events:result})})
};

const CPDEventNewsFeedGet =async (req, res) => {
	Event.find({tag: "CPD"}).then(result=>{ res.render('pages/userNewsFeed', { events:result})})
};

module.exports={EventUploadGet,EventUploadPost,EventNewsFeedGet,WeeklyEventNewsFeedGet,CPDEventNewsFeedGet,DEVEventNewsFeedGet,CBDEventNewsFeedGet};