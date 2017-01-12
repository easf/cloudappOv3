var express = require("express");
var router = express.Router();
var requestHandlers = require("./requestHandlers");

//function route() {
	
	// var handle = {};
	// handle["/"] = requestHandlers.start;
	// handle["/start"] = requestHandlers.start;
	// handle["/upload"] = requestHandlers.upload;
	// handle["/show"] = requestHandlers.show;

	router.route("/")
	  .get(requestHandlers.start);
	
	router.get('/start', requestHandlers.start);
	router.post('/upload', requestHandlers.upload);
	router.get('/show', requestHandlers.show);
	
	// for (var path in handle) {
	//     if (path === '/upload'){
	//     	app.post(path, handle[path]);
	//     }else{
	//     	app.get(path, handle[path]);
	//     } 
	// }
//}

//exports.route = route;
module.exports = router;