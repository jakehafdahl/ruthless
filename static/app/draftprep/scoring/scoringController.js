'use strict';

(function(module){
	var scoringController = function($scope, loadScoring){
		var vm = this;
		vm.roster = $scope.prepView.roster;
		vm.scoringRules = $scope.prepView.scoringRules;
		vm.loadScoringSettings = function(){
			loadScoring().then(function(setting){
				
			});
		};
	};
	
	module.controller('scoringController',['$scope', 'loadScoring', scoringController]);
}(angular.module('ruthless')))