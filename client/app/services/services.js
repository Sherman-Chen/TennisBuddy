angular.module('TennisBuddy.services', [])

.factory('Users', function($http) {
  var getUsers = function() {
    return $http.get('/api/users').then(function(resp) {
      // console.log(resp);
      return resp.data.users
    });
  };

  var addUser = function(newUser) {
    return $http.post('/api/users').then(function(resp) {
      console.log(resp);
      return resp;
    });
  }

  return {
    getUsers: getUsers,
    addUser: addUser
  }
});