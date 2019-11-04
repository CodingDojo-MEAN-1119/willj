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

app.get('/showcat', (request, response) => {
    response.sendFile(__dirname + '/static/katpage.html');
});

app.get("/kitties", (request, response) => {
    var kittyArray = [
        {name: "Slater", age: "5", hobby: "relaxin"},
        {name: "Ben", age: "3", hobby: "Hunting"},
        {name: "Sarah", age: "5", hobby: "Jumping"},
        {name: "Bailey", age: "5", hobby: "Eating"},
    ]
    response.render('kitties', {kitties: kittyArray});
});

app.listen(8000, () => console.log("Listening on port 8000!"));