var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jay@2122001",
    database:"mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address LIKE 's%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});