angular.module('TennisBuddy', [
  'ngRoute',
  'TennisBuddy.landing',
  'TennisBuddy.signin',
  'TennisBuddy.services'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/landing', {
      templateUrl: 'app/landing/landing.html',
      controller: 'landingCtrl'
    })
    .when('/signin', {
      templateUrl: 'app/signin/signin.html',
      controller: 'signinCtrl'
    })
    .otherwise({
      redirectTo: '/landing'
    })
});