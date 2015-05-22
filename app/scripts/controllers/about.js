'use strict';

/**
 * @ngdoc function
 * @name ngMockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngMockApp
 */
angular.module('ngMockApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
