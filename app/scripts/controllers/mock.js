'use strict';

/**
 * @ngdoc function
 * @name ngMockApp.controller:MockCtrl
 * @description
 * # MockCtrl
 * Controller of the ngMockApp
 */
angular.module('ngMockApp')
		.controller('MockCtrl', ['$scope', '$http', '$httpBackend', function ($scope, $http, $httpBackend) {

			$httpBackend.expectPOST('/hello', {
				email: 'Hello World!'
			});

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
