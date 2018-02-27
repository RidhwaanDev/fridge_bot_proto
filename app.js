//random comment
const express = require('express');
const bodyparser= require('body-parser');
const path = require('path');
const mongodb = require('mongodb');
const mongoman = require('./database/mongoman');

const dbUrl = 'mongodb://localhost:27017/fridge_db';

let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


mongoman.getBots(function(err,result){

	console.log(result);	

});

app.listen(3000,function(){
	console.log("Started server");
});



