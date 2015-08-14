'use strict';

(function (module) {
	var projectionsController = function ($scope, scoringFieldOptions, positionFieldOptions, updatePlayer) {
		var vm = this;
		vm.scoringRules = $scope.prepView.scoringRules;

		vm.projections = $scope.prepView.projections;
		
		//build displays for each position and set up table props for them (consider limit to 5 or so)
		vm.tables = {};
		vm.scoringRules.forEach(function (rule) {
			var fieldInfo = scoringFieldOptions.filter(function (field) {
				return field.field === rule.field
			})[0];

			var column = {
				name: fieldInfo.fieldDisplay,
				field: fieldInfo.field
			};
								
			if (vm.tables[rule.position]) {

				vm.tables[rule.position].columns.push(column);
			} else {
				var positionInfo = positionFieldOptions.filter(function (positionField) {
						return positionField.position === rule.position;
					})[0];
					
				vm.tables[rule.position] = {
					title: positionInfo.positionDisplay,
					columns: []
				};

				vm.tables[rule.position].columns.push(column);
			}
		});

		vm.editPlayer = function(player){
			var rules = vm.scoringRules.filter(function (rule){return rule.position === player.position});
			updatePlayer(player, rules).then(function(updatedPlayer){
				for (var prop in updatedPlayer) {
                    if (updatedPlayer.hasOwnProperty(prop)) {
                        player[prop] = updatedPlayer[prop];
                    }
                }
			});
		};
	};

	module.controller('projectionsController', ['$scope', 'scoringFieldOptions', 'positionFieldOptions', 'updatePlayer', projectionsController]);
}(angular.module('ruthless')))