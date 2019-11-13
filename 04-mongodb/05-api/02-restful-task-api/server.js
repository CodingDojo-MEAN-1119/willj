const express = require('express');
const app = express();
const server = app.listen(8000);

const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/dist/restfulTaskApi'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));


require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

