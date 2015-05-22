'use strict';

/**
 * @ngdoc function
 * @name ngMockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngMockApp
 */
angular.module('ngMockApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
