'use strict';
(function(module) {

    var updatePlayer = function ($modal, scoringFieldOptions) {

        return function(player, rules) {

            var tempPlayer = {};
            
            for (var prop in player) {
                if (player.hasOwnProperty(prop)) {
                    tempPlayer[prop] = player[prop];
                }
            }

            var options = {
                templateUrl: "app/draftprep/projections/player-projection.html",
                controller: function () {
                    this.player = tempPlayer;
                    this.rules = rules;
                    this.getFieldDisplay = function(field) {
                        return scoringFieldOptions.filter(function(fieldOption) { return fieldOption.field === field })[0].fieldDisplay;
                    };
                },
                controllerAs: "model"
            };
            
            return $modal.open(options).result;
        };

    };

    module.factory('updatePlayer', ['$modal', 'scoringFieldOptions', updatePlayer])
}(angular.module('ruthless')))