var config = { }

config.server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
config.server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

module.exports = config;

//rhc env set GA_TRACKER=UA-579081
//rhc env set SECRET_KEY=0P3N_S0URC3
//rhc env list
