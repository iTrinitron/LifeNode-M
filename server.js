var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

//Database Config File
var config = require('./config'); 
//Database Util
var mongoose = require('mongoose');
//ASYNC Operations for API 
var async = require('async');

var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

var app = express();

/* MODELS */
var Character = require('./models/workouts');

//Connect to the Database
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

//Expresss Routes

//Server-side render of React
app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});