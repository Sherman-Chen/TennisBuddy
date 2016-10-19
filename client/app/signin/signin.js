angular.module('TennisBuddy.signin', [])

.controller('signinCtrl', function($scope, Users) {
  $scope.users = {};
  $scope.dummy;

  Users.getUsers().then(function(user) {
    $scope.users.users = user;
    $scope.dummy = $scope.users.users[4].buddies;
  });
  

  $scope.btnclick = function() {
    console.log('wired');
    // Users.getUsers().then(function(user) {
    //   $scope.users.users = user;
      console.log($scope.users);
    // });
  }

});