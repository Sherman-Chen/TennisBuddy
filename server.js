'use strict'

// mock data & etc
var mock = require('./mock/mockusers.json');
var sfCourts = require('./mock/tennis_court_data.json');
var port = process.env.PORT || 8888;

var express = require('express');
var app = express();
var router = express.Router();

// mongoDB
require('./database');

// serve angular client
app.use('/', express.static('client'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// API routing
app.use('/api', router);

router.get('/users', function(req, res) {
  // UserSchema.find(function(err, user) {
  //   if (err) {
  //     res.send(err);
  //   }
  //   res.json(user);
  // }); 
  res.json({users: mock});
});

router.post('/users', function(req, res) {
  // post to DB with new user
});

router.get('/courts', function(req, res) {
  res.json({courts: sfCourts});
});

// start server
app.listen(port, function() {
  console.log('app is live on port ' + port);
});



// things to do
// modularize express server, and also create routing