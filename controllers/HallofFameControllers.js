const HallOfFame= require('../models/HallOfFame')


const HallofFamePost=async(req, res) => {
	const halloffame=new HallOfFame({
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		gender:req.body.gender,
		famephoto:req.file.filename,
		famedescription:req.body.famedescription,
		year:req.body.year,//checkbox
		division:req.body.division,
		posted_by:'Admin',
		is_deleted:0,
		deleted_at:null,
		deleted_by:null,
		approved_by:"Admin",
		approved_at:Date.now(),
		approved_status:1
	});
	try{
		const savedhalloffame=await halloffame.save();
		res.redirect('/fames/post');
	}catch(err){
			res.status(400).send(err.message);
}};

const hallofFameGet=(req,res) =>{
	res.render('pages/AdminHallofFame')
}

const hallofFamesListGet =async (req, res) => {
	HallOfFame.find().then(result=>{ res.render('pages/UserhallofFame', { fames:result});})
};

module.exports={HallofFamePost,hallofFameGet,hallofFamesListGet };