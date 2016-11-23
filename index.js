var server = require("./server");
var router = require("./router");
var config = require('./config');
var requestHandlers = require("./requestHandlers");

//var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
//var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle, config.server_port, config.server_ip_address);