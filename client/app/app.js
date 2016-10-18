angular.module('TennisBuddy', [
  'ngRoute',
  'TennisBuddy.landing',
  'TennisBuddy.signin',
  'TennisBuddy.services',
  'TennisBuddy.signup'
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
    .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'signupCtrl'
    })
    .otherwise({
      redirectTo: '/landing'
    })
});