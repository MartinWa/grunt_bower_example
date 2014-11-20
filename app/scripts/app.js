'use strict';

/**
 * @ngdoc overview
 * @name gruntBowerExampleApp
 * @description
 * # gruntBowerExampleApp
 *
 * Main module of the application.
 */
angular
  .module('gruntBowerExampleApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
