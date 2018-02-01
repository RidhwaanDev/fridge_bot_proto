//server side code

'use strict'


const port = 8180;

let obj = {

	fridge_data: 3231234,
	name:"Hello",
	temp:24,
}

let obj_str = JSON.stringify(obj);

let http = require("http");
let url = require("url");

function start(router,handle){
	function onRequest(request,response){

	let postData = "";

	console.log("Request recieved");

	let name = url.parse(request.url).pathname;

	request.setEncoding("utf8");

	request.addListener("data", function(postDataChunk){
		postData += postDataChunk;
		console.log("DATA CHUNK" +  postDataChunk);
	});

	request.addListener("end",function(){
		console.log("RESULTING DATA" +  "  " + postData);
		router(name,handle,response,postData);
	});	

// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	response.write(obj_str);
// 	response.end();
// 
}

http.createServer(onRequest).listen(port);

}

exports.start = start;












