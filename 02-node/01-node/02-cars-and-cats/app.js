const http = require("http");
const fs = require("fs");
const path = require("path");

function readFile(response, filename, contentType = "", encoding = "utf8") {
    contentType = contentType || "text/" + filename.split(".").pop();
    fs.readFile(path.resolve(__dirname, filename), (err, contents) => {
        response.writeHead(200, {
            "Content-Type": contentType
        });
        response.write(contents, encoding);
        response.end();
        console.log(`Serving file ${filename} with content type ${contentType}`);
    });
}

const server = http.createServer(function(request, response) {
    console.log(`Requesting URL: ${request.url}, standby....`);

    switch (request.url) {
        case "/cars":
            readFile(response, "./cars.html");
            break;
        case "/cats":
            readFile(response, "./cats.html");
            break;
        case "/cars/new":
            readFile(response, "./newcar.html");
            break;
        case "/stylesheets/style.css":
            readFile(response, "./stylesheets/style.css");
            break;
        case "/merc":
            readFile(response, "./images/merc.jpg", "image/jpeg", "binary");
            break;
        case "/kitty":
            readFile(response, "./images/meow.jpg", "image/jpeg", "binary");
            break;
        default:
            response.end();
            break;
    }
});

server.listen(6789);

