//server side code

'use strict'


const port = 8008;

let obj = {

	fridge_data: 3231234,
	name:"Hello",
	temp:24,
}

let obj_str = JSON.stringify(obj);

let http = require("http");
let url = require("url");
function write(){

console.log("write line");
console.log("write line from desktop");
}
function start(route){
	function onRequest(request,response){
	console.log("Request recieved");
	console.log(response.toString());

	let pathname = url.parse(request.url).pathname;

	route(pathname);

	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write(obj_str);
	response.end();
}


http.createServer(onRequest).listen(port);

}

exports.start = start;

