
var server = require("./server");
var router = require("./router");
var config = require('./config');
var requestHandlers = require("./requestHandlers");

 
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle, config.server_port, config.server_ip_address);