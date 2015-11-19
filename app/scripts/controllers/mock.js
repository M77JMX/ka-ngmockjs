'use strict';

/**
 * @ngdoc function
 * @name ngMockApp.controller:MockCtrl
 * @description
 * # MockCtrl
 * Controller of the ngMockApp
 */
angular.module('ngMockApp')
		.controller('MockCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.getMockData = function(){
      $.ajax({
        url: 'hello.json',
        type: 'get',
        dataType: 'json'
      }).success(function(data){
        $scope.email = data.email;
      });
    };


			$scope.postTest = function () {
				$http.get('/hello', {
					url: 'hello',
					type: 'post',
					dataType: 'json'
				}).success(function (data) {
					$scope.postemail = data.email;
				});
			};
  }]);
