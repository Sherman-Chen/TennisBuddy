'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tennisbuddy', function(err) {
  if (err) {
    console.log('Error! Failed to connect to MongoDB://localhost/tennisbuddy');
  } else {
    console.log('Successfully connected to MongoDB://localhost/tennisbuddy');
  }
});