'use strict'

let exec = require("child_process").exec;
let querystring = require("querystring");


function send(response,data){

let body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+ 'charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/upload" method="post">'+
'<textarea name="text" rows="20" cols="60"></textarea>'+ '<input type="submit" value="Submit text" />'+ '</form>'+
'</body>'+
'</html>'



    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();


}

function upload(response,data){
	    response.writeHead(200,{"ContentType": "text/plain"});
		response.write("You have sent" + " " + querystring.parse(data).text);
		response.end();
		console.log("upload called")
}

function vim(response,data){

	exec("ls", function(error, stdout,stderr){

		response.writeHead(200,{"ContentType": "text/plain"});
		response.write(stdout);
		response.end();

	});
}

exports.send = send;
exports.upload = upload;
exports.vim = vim;

