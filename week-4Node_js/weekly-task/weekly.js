const fs = require('fs');
const axios = require('axios');
const nodemailer = require('nodemailer');
const http = require('http');
var require = require('email-templates').EmailTemplate

const emails = fs.readFileSync('intern.txt').toString().split('\n');

const apiUrl = 'https://inshortsapi.vercel.app/news?category=science';

axios.get(apiUrl)
.then(response => {
    const data = response.data;
    console.log(data);
    let content = `
    <html>
    <head>
    <style>
      body{
        font-size: 1.25rem;
        background-color: hsl(212, 45%, 89%);
        margin: 50px;
      }
  
      .styled-table {
        border-collapse: collapse;
        border: 2px solid black;
        background-color : #ccff99;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      }
  
      .styled-table td{
        border: 2px solid black;    
      }
  
      .styled-table th{
        border: 2px solid black;    
      }
  
      .styled-table thead tr {
        background-color: #b3ffd9;
        color: black;
        text-align: left;
      }
    
    </style>
    
    </head>
    <body>
    
      <div class="container">
        <div class="table-responsive">
            <table id="myTable" class="table styled-table">
                <thead>
                    <tr>                
                        <th><center><b>Author</b></center></th>
                        <th><center><b>Content</b></center></th>
                        <th><center><b>Date</b></center></th>
                        <th><center><b>Title</b></center></th>
                    </tr>
                </thead>
                <tbody id="userData">`
     
    
                data.data.map((values) => {
                    content += `<tr>
                    <td>${values.author}</td>
                    <td>${values.content}</td>
                    <td>${values.date}</td>
                    <td>${values.title}</td>
                    </tr>`
                });

                content += `</tbody>
            </table>
        </div>
      </div>
    </body>
  </html>`

   const msg = {
    from : 'jaypatel.lamprostech@gmail.com',
    to:emails.join(','),
    subject:'sports News',
    html:content
   }

   let transporter = nodemailer.createTransport({
    service:'gmail',
     host:'smtp.gmail.com',
      port:465,
    secure:true,
    auth: {
        user:"jaympatel212@gmail.com",
        pass:"otqozmpdwtmyysio"
    }
   });

   transporter.sendMail(msg,(error,info) =>{
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent:'+info.response);
    }
   });

})
.catch(error => {
    console.log(error);
});