// manage mongoDB read write upload operations.
const mongodb = require("mongodb");
const url = 'mongodb://localhost:27017/fridge_db'

let MongoClient = mongodb.MongoClient;

const fridge_database = "fridge_db";

exports.getBots = function getBots(callback){

	MongoClient.connect(url,function(err,client){
	
	if(err){
		
	console.log("Error in connecting to the database" + err);

	} else {	
		let fridgedb = client.db(fridge_database);
 		let collection = fridgedb.collection('bots');
		collection.find({}).toArray(function(err,result){	

		if(err){
		console.log("could not find collection" + err);
		}	

		if(result.length){
		console.log("Results recieved");	
		
		callback(err,result);

		}		

		});
	}
	
	});
}

exports.update = function update(package){
	MongoClient.connect(url,function(err,client){
	
	if(err){
	console.log(err);
	} else {
	
	let db  = client.db(fridge_database);
	db.collection('bots').insertOne(package,function(err,res){
	
		if(err){
		console.log("error in uplading" +  err);
		} else{
		
		console.log(res);
		client.close();
		
		}
	
	});	
	
	}
	
	});
}






















