'use strict';

(function(angular){
	
	var homeContoller = function($scope){
		$scope.message = 'Test Here';
	};
	
	angular.module('meanApp',[]);
	
	angular.module('meanApp').controller('homeController',[ '$scope', homeContoller])
}(angular))