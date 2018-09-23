const http = require('http');
const url = require('url');

function start(route, handle) {
  http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    
    route(handle, pathname);
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World!');
    response.end();
    console.log('Request Ended');
  }).listen(process.env.PORT);
  
  console.log('Server has started.');
}

exports.start = start;