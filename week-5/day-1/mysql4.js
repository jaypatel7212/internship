var mysql = require('mysql');

var  con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jay@2122001",
    database: "mydb"
});


con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "INSERT INTO  customers (name,address) VALUES ?";
    var values =[
        ['jay','patan'],
        ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989']
    ];
    con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log(" record inserted");
    });

});