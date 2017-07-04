var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//connect to mongoDB
var db = require('mongoskin').db("localhost/testdb", { w: 0});

db.bind('event');

//create express app, use public folder for static files
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

// config Middleware (when using 3rd party Middleware we just access something)
// the return value of bodyParser.json() is a function that we need to give to Express
// now we can send JSON to Express
app.use(bodyParser.json());

app.listen(3000);
