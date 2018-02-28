//random comment
const express = require('express');
const bodyparser= require('body-parser');
const path = require('path');
const mongodb = require('mongodb');
const mongoman = require('./database/mongoman');

let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get('/upload',function(err,res){
console.log('ploading recievied');
// let id = res.body.id;
// let data = res.body.data;
// let temp = data.temp;
// let date = data.log;


 let package = {
 id:'101001',
 temp:32,
 date:'1/10/10',
 phone:'6095407816'

 }

mongoman.update(package);


});


// mongoman.getBots(function(err,result){
// 
// 
// });


app.listen(3000,function(){
	console.log("Started server");
});



