'use strict'

var port = process.env.PORT || 8888;

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Under Construction');
});

app.get('*', function(req, res) {
  res.sendfile();
});

// start server
app.listen(port, function() {
  console.log('app is live on port ' + port);
});