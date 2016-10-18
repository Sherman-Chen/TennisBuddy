'use strict';

var User = require('./models/user.js');

var seeds = [
  {"username": "Sherman", "password": "testing", "buddies": ["Bob", "John"]},
  {"username": "notSherman", "password": "testing", "buddies": ["Roger", "John"]},
  {"username": "AlsoNotSherman", "password": "testing"},
  {"username": "weekndWarrior", "password": "tennis", "buddies": ["Sherman", "notSherman"]}
];

seeds.forEach(function(seed, i) {
  User.find({'username': seeds[i].username}, function(err, users) {
    if (!err && !users.length) {
      User.create({
        username: seeds[i].username,
        password: seeds[i].password,
        buddies: seeds[i].buddies
      });
    }
  });
});