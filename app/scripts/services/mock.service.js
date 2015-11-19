/**
 * Created by dev013 on 15-11-19.
 */
(function (ng) {
	'use strict';

	ng.module('ngMockApp')
			.factory('MockService', function () {
				return {
					random: window.Random,
					mock: window.Mock.mock,
					tpl: window.Mock.tpl
				};
			});
})(angular);