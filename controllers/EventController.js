const Event= require('../models/Event')


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
module.exports={EventUploadGet,EventUploadPost};