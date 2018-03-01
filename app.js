//random comment
const express = require('express');
const bodyparser= require('body-parser');
const path = require('path');
const mongodb = require('mongodb');
const mongoman = require('./database/mongoman');
const sms = require('./sms.js');
let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));



// Make sure the query parameters exist
let queryValidator= function(req,res,next){
  let id = req.body.id;
  let data = req.body.data;	
	if(!id || !data){
	//handle id being null
         console.log("something wrong with req");	
	}  
   next();
}
app.get('/send',function(req,res){
 sms.sendmsg();
});


app.get('/getbots',function(req,res){

mongoman.getBots(function(err,result){
	res.send(result);
});

});
//app.use(packageValidator);

app.get('/upload',function(req,res){
let msg = req.query.fridgeid + "  " + req.query.temp;	
let temp = req.query.temp;
// check if temp falls under a certain temperature 
res.send(msg);



 let package = {
 id:'101001',
 temp:32,
 date:'1/10/10',
 phone:'6095407816'

 }

// mongoman.update(package);


});

app.listen(3000,function(){
	console.log("Started server");
});



