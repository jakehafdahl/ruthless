'use strict';
(function(module) {

    var editScoringRule = function ($modal, scoringFieldOptions, positionFieldOptions) {
        return function(rule) {

            var tempRule = {
                field: rule.field,
                pointsFor: rule.pointsFor,
                requiredPer: rule.requiredPer,
                position: rule.position
            };

            var options = {
                templateUrl: "app/draftprep/scoring/add-scoring-rule.html",
                controller: function () {
                    this.title = "Edit Scoring Rule";
                    this.rule = tempRule;
                    this.positionFieldOption = positionFieldOptions;
                    this.scoringFieldOption = scoringFieldOptions;
                },
                controllerAs: "model"
            };


            return $modal.open(options).result;
        };
    };

    module.factory('editScoringRule', ['$modal', 'scoringFieldOptions', 'positionFieldOptions', editScoringRule]);
}(angular.module('ruthless')))