var server = require('./server');
var port = 3000;

server().listen(port);
console.log('Server listening on 127.0.0.1:'+port);