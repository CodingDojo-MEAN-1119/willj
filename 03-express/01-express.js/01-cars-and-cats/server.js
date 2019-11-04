const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

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

app.get('/cat1', (request, response) => {
    var cat1 = {
        name: "Barry",
        age: 5,
        hobby: "Lounging",
        picture: "/images/cat1.jpg"
    }
    response.render('info', {cat: cat1});
});

app.get('/cat2', (request, response) => {
    var cat2 = {
        name: "Slater",
        age: 7,
        hobby: "Lying in the Sun",
        picture: "/images/cat2.jpg"
    }
    response.render('info', {cat: cat2});
});

app.get('/cat3', (request, response) => {
    var cat3 = {
        name: "Stanley",
        age: 3,
        hobby: "Going outside",
        picture: "/images/cat3.jpg"
    }
    response.render('info', {cat: cat3});
});

app.listen(8000, () => console.log("Listening on port 8000!"));