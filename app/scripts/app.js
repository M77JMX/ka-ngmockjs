'use strict';

/**
 * @ngdoc overview
 * @name ngMockApp
 * @description
 * # ngMockApp
 *
 * Main module of the application.
 */
angular
		.module('ngMockApp', [
			'ngAnimate',
			'ngCookies',
			'ngMessages',
			'ngResource',
			'ngRoute',
			'ngSanitize',
			'ngMock',
			'ngTouch'
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
					.when('/mock', {
						templateUrl: 'views/mock.html',
						controller: 'MockCtrl'
					})
					.otherwise({
						redirectTo: '/'
					});
		});
