const http = require('http');
const url = require('url');
const fs = require("fs");

// 404
function send404Response(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write("Error 404: Page not found");
    response.end();
}

  function onRequest(request,response) {
    if(request.method == 'GET' && request.url == '/') {
      response.writeHead(200, {'Content-Type': 'text/html'});
       fs.createReadStream("./index.html").pipe(response);
    } else if(request.method == 'GET' && request.url == '/factors') {
      response.writeHead(200, {'Content-Type': 'text/html'});
      fs.createReadStream("./factors.html").pipe(response);
    }  else if(request.method == 'GET' && request.url == '/primes') {
      response.writeHead(200, {'Content-Type': 'text/html'});
      fs.createReadStream("./primes.html").pipe(response);
    }  else if(request.method == 'GET' && request.url == '/reverse') {
      response.writeHead(200, {'Content-Type': 'text/html'});
      fs.createReadStream("./reverse.html").pipe(response);
    } else if(request.method == 'GET' && request.url == '/random') {
      response.writeHead(200, {'Content-Type': 'text/html'});
      fs.createReadStream("./random.html").pipe(response);
    }  else {
      send404Response(response);
    }
    
  }
  http.createServer(onRequest).listen(process.env.PORT);
  console.log("server running");