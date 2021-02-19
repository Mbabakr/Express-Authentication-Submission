const { MongoClient } = require('mongodb');

var mongo = require('mongodb').MongoClient;
var url = "mongodb+srv://root:qwerty123@cluster0.4w2rf.azure.mongodb.net/test";

MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo=db.db("portfolio");
	
	var myobj1={
		name:"Jagjit Singh",
		email:"sjagjit@gmail.com",
		phone:435667889,
		address:"brampton,ON"
	};
	
    var myobj2 = [
		{name:"John Doe",number:"4784467575",email:"john.doe@gmail.com"},
		{name:"Eric Miller",number:"4379917867",email:"milleric@hotmail.com"}
	];
	
		/*dbo.collection("user_accounts").insert(myobj1, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });*/
		
      dbo.collection("contact_list").insert(myobj2, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
});