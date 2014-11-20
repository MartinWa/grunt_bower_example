'use strict';

/**
 * @ngdoc function
 * @name gruntBowerExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gruntBowerExampleApp
 */
angular.module('gruntBowerExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
