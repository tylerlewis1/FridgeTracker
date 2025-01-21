const http = require('http');
const sender = require('./sender.js');
const port = process.env.PORT || 80;
var fs = require('fs');
var server = http.createServer(sender);
server.listen(port);
process.on('SIGINT', shutDownServer);
process.on('SIGTERM', shutDownServer);

function shutDownServer(){
    console.log("Shutting down server"); 
    server.close();
    console.log("Server shut down!\nGoodbye!"); 
    process.exit(0);
}