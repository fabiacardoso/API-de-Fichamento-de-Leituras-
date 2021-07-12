var express = require('express');

app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
ficha = require('./api/models/fichaModel');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

// Config request
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Call route
var routes = require('./api/routes/fichaRoutes');
routes(app);

app.listen(port);



