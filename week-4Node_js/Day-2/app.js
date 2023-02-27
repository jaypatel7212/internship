// const express = require("express");
// const app = express();
// let PORT=3000;


// app.get("/",(req,res) => {
//     res.send("I am a server");
// });


// const start = async() => {
//     try {
//         app.listen(PORT,() =>{
//             console.log(`I am live in port no.${PORT}`);
//         } );
//     } catch(error){}
    
// };

// Start();



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host:'smtp.gmail.com',
    port:465,
    secure:true,
  auth: {
    user: 'jaypatel.lamprostech@gmail.com',
    pass: 'jpewlxrvpkgmrjtq'
  }
});

var mailOptions = {
  from: 'jaypatel.lamprostech@gmail.com',
  to: 'patelnimesh382@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hii bro.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});