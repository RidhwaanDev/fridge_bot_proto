//random comment
const express = require('express');
const bodyparser= require('body-parser');
const path = require('path');
const mongodb = require('mongodb');


const dbUrl = 'mongodb://localhost:27017/fridge_db';

let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));



//use middle ware to check if already exits and to check if clean args
app.get('/botlist',function(req,res){
	let MongoClient = mongodb.MongoClient;

	MongoClient.connect(dbUrl,function(err,client){
		if(err){
			res.send(err);
		console.log("some error occurred" + "    "  +err);
		} else {
		
		let db = client.db('fridge_db');
		let collection = db.collection('bots'); 
		collection.find({}).toArray(function(err,result){
	
			if(err){
			console.log("error my bad bro");
				res.send(err);
			} else {
			
			res.send(result);
			
			}
			db.close();


			});
		
		}
	});

});



app.listen(3000,function(){
	console.log("Started server");
});



