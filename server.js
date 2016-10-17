'use strict'

var port = process.env.PORT || 8888;

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Under Construction');
});

app.use('/landing', express.static('public'));

app.get('/landing', function(req, res) {
  res.sendfile('public/index.html', {root: __dirname }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('landing served');
    }
  });
});

// start server
app.listen(port, function() {
  console.log('app is live on port ' + port);
});