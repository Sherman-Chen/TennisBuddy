'use strict'

var mongoose = require('mongoose');
var mock = require('./mock/mockusers.json');
var sfCourts = require('./mock/tennis_court_data.json');
var port = process.env.PORT || 8888;

mongoose.connect('mongodb://localhost/tennisbuddy');

var express = require('express');
var app = express();

// serve angular client
app.use('/', express.static('client'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// default user schema, users will have a username, a pw, and an optional buddies list in form of array
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  buddies: {
    type: Array
  }
});

// endpoint for users database
app.get('/api/users', function(req, res) {
  // UserSchema.find(function(err, user) {
  //   if (err) {
  //     res.send(err);
  //   }
  //   res.json(user);
  // }); 
  res.json({users: mock});
});

// endpoint to post to users database
app.post('/api/users', function(req, res) {
  // post to DB with new user
});

// endpoint for SF tennis court database
app.get('/api/courts', function(req, res) {
  res.json({courts: sfCourts});
});

// start server
app.listen(port, function() {
  console.log('app is live on port ' + port);
});



// things to do
// modularize express server, and also create routing