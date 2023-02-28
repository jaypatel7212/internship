var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jay@2122001",
    database:"mydb"
});

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM customers",function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});