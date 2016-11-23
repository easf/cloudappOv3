var http = require("http");
var url = require("url");

function start(route, handle, server_port, server_ip_address) {
    function onRequest ( request, response ) {
        var pathname = url.parse(request.url).pathname;
        var postData = "";
        console.log("Request for " + pathname + " received.");
        route( handle, pathname, response, request );
    }

http.createServer( onRequest ).listen(server_port, server_ip_address);
console.log("Server has started. Port: " + server_port + ". IP: " + server_ip_address);
}

exports.start = start;

