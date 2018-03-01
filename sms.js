const twilio = require('twilio');
const sid = 'ACfc64229b1f785fcab95e4d97c05f07a2';
const authToken = 'e72bb59749a2d8c7668cd1d44372ebca';
const phonenumber = '+12672456091';

let smsclient = new twilio(sid,authToken);
exports.sendmsg = function sendmsg (body,to){
	smsclient.messages.create({

	body: 'Are you coming to school today',
	to: '+16095800390',
	from: phonenumber
},function(message){
	console.log(message);
	}); 
}
