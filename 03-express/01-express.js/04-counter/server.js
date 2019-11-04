const express = require("express");
const app = express();
const session = require('express-session');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));

app.get('/', (request, response) => {
    if(!('count in request.session')) {
        request.session.count -= 1;
    }
    request.session.count += 1;
    var count = request.session.count;
    response.render('index', {count: count});
});

app.get('/plus2', (request, response) => {
    request.session.count += 1;
    response.redirect('/');
});

app.get('/plus5', (request, response) => {
    request.session.count += 5;
    response.redirect('/');
});

app.get('/reset', (request, response) => {
    request.session.count -= 1;
    response.redirect('/');
});


app.listen(8000, () => console.log("listening on port 8000, server up and running!"));
