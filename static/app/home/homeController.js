'use strict';

(function(module){
	
	var homeContoller = function($scope){
		$scope.message = 'Test Here';
	};
	
	
	module.controller('homeController',[ '$scope', homeContoller])
}(angular.module('ruthless')))