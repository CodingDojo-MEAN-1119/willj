const express = require('express');
const app = express();
const flash = require('express-flash');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));

app.use(flash());
app.use(session({
    secret: 'disasecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/#', {useNewUrlParser: true});

const OwlSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    habitat: {type: String}
}, {timestamps: true});

const Owl = mongoose.model('Owl', OwlSchema);

app.get('/', (request, response) => {
    Owl.find()
        .then(owls => {
            response.render('index', {all_owls: owls})
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/owl/add', (request, response) => {
    response.render('add');
});

app.post('/owl/add/new', (request, response) => {
    Owl.create(request.body)
        .then(() =>{
            response.redirect('/')
        })
        .catch(err =>{
            console.log(err);
        })
});

app.get('/owl/:name', (request, response) => {
    const name = request.params.name
    Owl.findOne({name: name})
        .then(owls => {
            response.render('owls', {owls: owls})
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/owl/:name/edit', (request, response) => {
    const name = request.params.name
    Owl.findOne({name: name})
        .then(owls => {
           response.render('edit_owl', {owls: owls}) 
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/owl/:name/edit/confirm', (request, response) => {
    const name = request.params.name
    Owl.findOne({name: name})
        .then(owls => {
            owls.name = request.body.name
            owls.age = request.body.age
            owls.habitat = request.body.habitat
            return owls.save()
            .then(response.redirect(`/owl/${owls.name}`))
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/owl/:name/destroy', (request, response) => {
    const name = request.params.name
    Owl.remove({name: name})
        .then(() => {
            response.redirect('/')
        })
        .catch(err => {
            console.log(err);
        });
});

app.listen(8000);

