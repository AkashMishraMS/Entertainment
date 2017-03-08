// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('cookie-session');


var methodOverride = require('method-override');
var movies = require('./app/movie-crud');
var City = require('./app/City-crud');
var Theater = require('./app/Theater-crud');
var map=require('./app/Map-crud');
var authin = require('./app/auth');
var bookT=require('./app/booking-crud');


// configuration ===========================================

// config files
//var db = require('./config/db');
app.use(bodyParser.json({})); // parse application/json
app.use('/movie', movies);
app.use('/Cities', City);
app.use('/theaterApi', Theater);
app.use('/mapingapi',map);
app.use('/', authin);
app.use('/booking',bookT);

var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/test';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to DB");
});

app.use(passport.initialize());
app.use(passport.session());

var port = process.env.PORT || 3000; // set our port
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app =============s==================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
