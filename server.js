'use strict'

var express = require('express');
var app = express();

// app.use('/', express.static('public')); eventually...

app.get('/', function(req, res) {
  res.send('Under Construction');
});

app.listen('8888', function() {
  console.log('app is live on port 8888');

});