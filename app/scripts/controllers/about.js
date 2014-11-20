'use strict';

/**
 * @ngdoc function
 * @name gruntBowerExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gruntBowerExampleApp
 */
angular.module('gruntBowerExampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
