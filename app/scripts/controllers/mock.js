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

			$scope.postTest = function () {
				$http.post('/hello', {
					url: 'hello',
					type: 'post',
					dataType: 'json'
				}).success(function (data) {
					$scope.postemail = data.email;
				});

			};
  }]);
