const nodemailer=require('nodemailer');

module.exports=async()=>{
    try{
        const transporter=nodemailer.createTransport({
            host:process.env.PORT,
            service:process.env.SERVICE,
            port:587,
            secure:true,
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }

        })
        await transporter.sendMail({
            from:process.env.USSER,
            to:email,
            subject:subject,
            text:text

        })
        console.log('email sent successfully')
    }catch(error){
        console.log(error,"email sent successfully")


    }
}