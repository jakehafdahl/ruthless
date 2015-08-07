'use strict';

(function (module) {
    
    var addScoringRule = function ($modal, scoringFieldOptions, positionFieldOptions) {
        return function () {

            var rule = {
                field: "rushYards",
                pointsFor: 1,
                requiredPer: 1,
                position: "RB"
            };

            var options = {
                templateUrl: "app/draftprep/scoring/add-scoring-rule.html",
                controller: function () {
                    this.title = "Create Scoring Rule";
                    this.rule = rule;
                    this.positionFieldOption = positionFieldOptions;
                    this.scoringFieldOption = scoringFieldOptions;
                },
                controllerAs: "model"
            };

            return $modal.open(options).result;
        };
    }

    module.factory('addScoringRule', ['$modal', 'scoringFieldOptions', 'positionFieldOptions', addScoringRule]);
}(angular.module('ruthless')))