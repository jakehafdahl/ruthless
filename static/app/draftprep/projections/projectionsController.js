'use strict';

(function(module){
	var projectionsController = function($scope, projectionsService){
		var vm = this;
		vm.scoringRules = $scope.prepView.scoringRules;
		
		vm.projections = projectionsService.getDefault();
		
	};
	
	module.controller('projectionsController',[ '$scope', 'projectionsService', projectionsController]);
}(angular.module('ruthless')))