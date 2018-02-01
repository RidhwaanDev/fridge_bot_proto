'use strict'


function route(pathName,handle,response,data){
	console.log("route", "  " + data);
	if(pathName == null ){
		return;
	}

	if( typeof handle[pathName] === 'function'){
		handle[pathName](response,data);
	} else {

		console.log("error" + "  " + typeof handle[pathName]);
	}



	if(!pathName.includes("./favicon.ico")){
		console.log("Path" + "  " + pathName + "  " + "recieved");

	}
}


exports.route = route;
