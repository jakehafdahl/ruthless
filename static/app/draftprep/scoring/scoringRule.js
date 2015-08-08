'use strict';

(function (module) {

    var scoringRuleDirective = function () {
        return {
            restrict: 'A',
            scope: {
                rule: '='
            },
            templateUrl: 'app/draftprep/scoring/scoring-rule.html',
            controller: function (scoringFieldOptions, $scope) {
                
                this.getDisplay = function(field) {
                    return scoringFieldOptions.filter(function (option) { return option.field === field })[0].fieldDisplay;
                };
                
                this.removeRule = function(rule){
                    var toDeleteIndex = $scope.$parent.$parent.scoringSettingView.scoringRules.indexOf(rule);
                    if (toDeleteIndex !== -1) {
                        $scope.deleteMe = $scope.$parent.$parent.scoringSettingView.scoringRules.splice(toDeleteIndex, 1);
                        delete $scope.deleteMe;
                    }
                };
            },
            controllerAs: 'ruleView'
        };
    };

    module.directive('scoringRule', [ 'scoringFieldOptions', scoringRuleDirective]);
} (angular.module('ruthless')))