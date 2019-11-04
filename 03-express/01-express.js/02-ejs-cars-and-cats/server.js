const express = require('express');
const app = express();


app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/static');

app.get('/', (request, response) => {
    response.send("Try /cars.html, /cats.html, /index.html, and /form.html");
});

app.get('/cars', (request, response) => {
    response.sendFile(__dirname + "/static/cars.html");
});

app.get('/cats', (request, response) => {
    response.sendFile(__dirname + '/static/cats.html');
});

app.get('/form', (request, response) => {
    response.sendFile(__dirname + '/static/form.html');
});

app.listen(8000, () => console.log("Listening on port 8000!"));