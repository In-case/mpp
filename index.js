require("http-proxy").createServer({
	target: 'wss://www.multiplayerpiano.com:443',
	wss: true
}).listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
var Client = require('mpp-client-xt')
var client = new Client("wss://www.multiplayerpiano.com:443")
client.setChannel("✧𝓡𝓟 𝓡𝓸𝓸𝓶");
client.start();

