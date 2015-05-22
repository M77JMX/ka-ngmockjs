'use strict';

/**
 * @ngdoc function
 * @name ngMockApp.controller:MockCtrl
 * @description
 * # MockCtrl
 * Controller of the ngMockApp
 */
angular.module('ngMockApp')
  .controller('MockCtrl', ['$scope', 'GetMockService', function ($scope, GetMockService) {
    GetMockService.mock(/\.json/,{
      'email': '@EMAIL'
    });
    $scope.getMockData = function(){
      $.ajax({
        url: 'hello.json',
        type: 'get',
        dataType: 'json'
      }).success(function(data){
        $scope.email = data.email;
      });
    };
  }]);
