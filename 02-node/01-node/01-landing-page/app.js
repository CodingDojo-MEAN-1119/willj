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

    if(request.url === "/ninjas.html") {
        fs.readFile('ninjas.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    if(request.url === '/dojos/new.html') {
        fs.readFile('new.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
});

server.listen(6789);
console.log("Currently running in localHost @ port 6789");