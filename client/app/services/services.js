angular.module('TennisBuddy.services', [])

.factory('Users', function($http) {
  var getUsers = function() {
    return $http.get('/api/users').then(function(resp) {
      console.log(resp);
      return resp.data.users
    });
  };

  return {
    getUsers: getUsers
  }
});