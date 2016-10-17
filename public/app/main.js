var TennisBuddy = angular.module('TennisBuddy', ['TennisBuddy.landing', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/landing', {
        templateUrl: 'app/landing/landing.html',
        controller: 'landingCtrl'
      })
  });