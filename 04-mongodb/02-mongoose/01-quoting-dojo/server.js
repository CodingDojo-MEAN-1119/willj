const express = require('express');
const app = express();
const flash = require('express-flash');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
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
mongoose.connect('mongodb://localhost/quotes_db', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
    posted_by: {type: String},
    quote: {type: String}
}, {timestamps: true})

const Quote = mongoose.model('Quote', QuoteSchema);




