const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(`Requesting URL: ${request.url}, standby...`);

    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/ninjas") {
        fs.readFile('ninjas.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
})