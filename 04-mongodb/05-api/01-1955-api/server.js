const express = require('express');
const app = express();
const server = app.listen(8000);

app.use(express.json());

require('./server/config/mongoose.js');
require('./server/config/routes/js')(app);