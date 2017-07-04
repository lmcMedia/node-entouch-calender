var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// set the dynamic PORT variable for Heroku or 3000 locally
// env variable can be found on Windows using SET in Command Prompt
const port = process.env.PORT || 3000;

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

// =======================================================================
// needs to be dynamic for Heroku
app.listen(port, ()=> {
  console.log(`Server is up on port ${port}`);
});
