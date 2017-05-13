
//Execute Db Connection first
require( './config/dbConnect' );

//Import Express Library in this application
var express = require('express');
//Import Mongodb Library in this application
var mongodb = require('mongodb');
//Import Mongoose Library in this application (Used to easy communicate with MongoDB)
var mongoose = require('mongoose');



//create app as express instance
var app = express();

// We have moved all Methods to controller.js in controllers folder
// We have writen all method functions in controller.js
// We have writen all REST GET address in routes and linked the methods of controller.js

// connecting routes to app to start listening for address once server starts
require('./routes')(app);


// Create server at given address "0.0.0.0" and posrt "8080"

var server = app.listen(8080, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port)
});


