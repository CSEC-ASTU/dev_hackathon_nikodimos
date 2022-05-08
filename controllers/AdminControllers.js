
const Getcapacity_building=(req,res) =>{
	res.render('pages/capacity_building')
}
const Getcompetitive_programming=(req,res) =>{
	res.render('pages/competitive_programming')
}

const Getdevelopment=(req,res) =>{
	res.render('pages/development')
}
const GetAdmin=(req,res) =>{
	res.render('pages/index')
}


const Getrequests=(req,res) =>{
	res.render('pages/requests')
}

const Getscoreboard=(req,res) =>{
	res.render('pages/scoreboard')
}

const Gettodo=(req,res) =>{
	res.render('pages/todo')
}

const Getevent_request=(req,res) =>{
	res.render('pages/event_request')
}

const Getvotes=(req,res) =>{
	res.render('pages/votes')
}

const Getcalendar=(req,res) =>{
	res.render('pages/calendar')
}
const GetAdminHallofFame=(req,res) =>{
	res.render('pages/AdminHallofFame')
}
const Getregistration_form=(req,res) =>{
	res.render('pages/registration_form')
}



module.exports={Getregistration_form,GetAdmin,Getcapacity_building,Getcompetitive_programming,Getdevelopment,Getrequests,Getscoreboard,Gettodo,Getevent_request,Getvotes,Getcalendar,GetAdminHallofFame};