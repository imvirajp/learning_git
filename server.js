const http = require('http');
const fs = require('fs');
const PORT = 9999;

const requestHandler = function(req,res){
  res.write('hello');
  res.end();
};

const server = http.createServer(requestHandler);
server.listen(PORT);
console.log(`listening on ${PORT}`);
