const express = require('express');
const app = express();
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
    cookie: { maxAge: 60000}
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/#', {useNewUrlParser: true});

const MessageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "You cannot leave this field blank!"],
        minlength: [1, "Your name cannot be blank"],
        maxlength: [25, "Names cannot exceed 25 characters"],
        trim: true
    },
    message: {
        type: String,
        required: [true, "You cannot leave this field blank!"],
        minlength: [1, "Blank Message, try adding some content..."],
        maxlength: [255, "You are over the max length of 255 Characters"],
        trim: true
    },
    comments: [CommentSchema]
}, {timestamps: true});

const Message = mongoose.model('Message', MessageSchema);

const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "You cannot leave this field blank!"],
        minlength: [1, "Your name cannot be blank!"],
        maxlength: [25, "Your name cannot exceed 25 Characters"],
        trim: true
    },
    comment: {
        type: String,
        required: [true, "You cannot leave this field blank!"],
        minlength: [1, "Blank comment, try adding some content..."],
        maxlength: [255, "Comments can only be 255 Characters"],
        trim: true
    }
}, {timestamps: true});

app.get('/', (request, response) => {
    Message.find().sort({createdAt: 'desc'})
        .then(all_messages => {
            response.render('index', { all_messages })
        })
        .catch(err => {
            console.log(err)
        });
});

app.post('/', (request, response) => {
    Message.create(request.body)
        .then(() => response.redirect('/'))
        .catch(err => {
            console.log(err)
            for(var key in err.errors) {
                request.flash('post_message', err.errors[key].message);
            }
            response.redirect('/')
        });
});

app.post('/:message_id/comment', (request, response) => {
    const { message_id } = request.params
    Message.findOne({_id:message_id})
        .then(this_message => {
            this_message.comments.push(request.body)
            return this_message.save()
            .then(() => response.redirect('/'))
        })
        .catch(err => {
            console.log(err)
            for(var key in err.errors) {
                request.flash('post_comment', err.errors[key].message);
            }
            response.redirect('/');
        });
});

app.listen(8000);

