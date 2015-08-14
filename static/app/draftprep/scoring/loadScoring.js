'use strict';

(function (module) {
    
    var loadScoring = function ($modal) {
        return function () {

            var options = {
                templateUrl: "app/draftprep/scoring/load-scoring.html",
                controller: function () {
                    this.title = "Load Scoring Setting";
                },
                controllerAs: "model"
            };

            return $modal.open(options).result;
        };
    }

    module.factory('loadScoring', ['$modal', loadScoring]);
}(angular.module('ruthless')))