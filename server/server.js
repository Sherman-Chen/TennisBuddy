'use strict'

// mock data & etc
// var mock = require('./mock/mockusers.json');
var sfCourts = require('./mock/tennis_court_data.json');
var port = process.env.PORT || 8888;

var bodyParser = require("body-parser");
var express = require('express');
var User = require('./models/user.js');

// instantiate server and router
var app = express();
var router = express.Router();

// mongoDB + seed data
require('./database');
require('./seed');

// serve angular client
app.use('/', express.static('../client'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

// API routing
app.use('/api', router);

router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
     if (err) {
      return res.status(500).json({message: err.message});  
     }
     res.json({users: users});
   }); 
  // res.json({users: mock});
});

router.get('/courts', function(req, res) {
  res.json({courts: sfCourts});
});

router.post('/users', function(req, res) {
  // post to DB with new user
  var user = req.body;
  User.create(user, function(err, user) {
    if (err) {
      return res.status(500.json({err: err.message}));
    }
  })
  res.json({user: user});
});


// start server
app.listen(port, function() {
  console.log('app is live on port ' + port);
});


