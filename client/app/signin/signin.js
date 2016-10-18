angular.module('TennisBuddy.signin', [])

.controller('signinCtrl', function($scope, Users) {
  $scope.users = {};

  Users.getUsers().then(function(user) {
    $scope.users.users = user;
  });
  
  $scope.btnclick = function() {
    console.log('wired');
    // Users.getUsers().then(function(user) {
    //   $scope.users.users = user;
      console.log($scope.users);
    // });
  }

});