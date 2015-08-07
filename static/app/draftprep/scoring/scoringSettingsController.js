(function(module){
	var scoringSettingsController = function($scope, addScoringRule, editScoringRule){
		var vm = this;
		vm.scoringRules = $scope.$parent.scoringView.scoringRules;
		
		vm.addNewRule = function () {
            addScoringRule().then(function (newRule) {
                vm.scoringRules.push(newRule);
            });
        };
		
		vm.editRule = function(rule) {
            editScoringRule(rule).then(function(editedRule) {
                for (var prop in editedRule) {
                    if (editedRule.hasOwnProperty(prop)) {
                        rule[prop] = editedRule[prop];
                    }
                }
            });
        };
	};
	
	module.controller('scoringSettingsController',['$scope', 'addScoringRule', 'editScoringRule', scoringSettingsController]);
}(angular.module('ruthless')))