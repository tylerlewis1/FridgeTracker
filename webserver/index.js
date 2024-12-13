const http = require('http');
const sender = require('./sender.js');
const port = process.env.PORT || 123;
var fs = require('fs');
var server = http.createServer(sender);
server.listen(port);