'use strict';

(function(module){
	var scoringController = function($scope){
		var vm = this;
		vm.roster = $scope.prepView.roster;
		vm.scoringRules = $scope.prepView.scoringRules;
	};
	
	module.controller('scoringController',['$scope', scoringController]);
}(angular.module('ruthless')))