/**
	Configuration file
*/

var config = { }

/**
	Port setting 
*/
					 // case: ENV-VAR    // case: OPENSHIFT-ENV-VAR			  // default
config.server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

/**
	IP Setting: Just for OPENSHIFT case, for other ones the ip is setted in server.js code
*/

config.server_ip_address = process.env.OPENSHIFT_NODEJS_IP;


/**
	Make dict "config" accesible
*/
module.exports = config;
