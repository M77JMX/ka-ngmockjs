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
			'ui.router',
			'ngSanitize',
			'ngMockE2E',
			'ngTouch'
		])
		.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
					.state('main', {
						url: '/main',
						templateUrl: 'views/main.html',
						controller: 'MainCtrl'
					})
					.state('about', {
						url: '/about',
						templateUrl: 'views/about.html',
						controller: 'AboutCtrl'
					})
					.state('mock', {
						url: '/mock',
						templateUrl: 'views/mock.html',
						controller: 'MockCtrl'
					});
			$urlRouterProvider.otherwise(function ($injector, $location) {
				$location.path('/main');
			});
		})
		.run(['$httpBackend', 'MockService', function ($httpBackend, MockService) {

			$httpBackend.whenGET(/views | images | scripts | styles/).passThrough();

			$httpBackend.whenPOST('/hello').respond(MockService.mock({
				email: '@EMAIL'
			}));
		}]);
