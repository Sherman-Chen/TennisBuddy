'use strict';

var mongoose = require('mongoose');

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

// default model

var user = mongoose.model('User', UserSchema);

module.exports = user;