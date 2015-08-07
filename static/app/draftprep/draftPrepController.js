'use strict';

(function(module){
	var draftPrepController = function(){
		var vm = this;
		
		vm.roster = {
			numberTeams: 12,
			rosterSize: 16,
			roster: {
				quarterbacks: 1,
				runningbacks: 2,
				widereceivers: 2,
				tightends: 1,
				wrrbflex: 0,
				wrrbteflex: 1,
				qbwrrbteflex: 0,
				kickers: 1,
				dst: 1
			}
		};
		
		vm.scoringRules = [
			{
				position: "RB",
				field: "rushYards",
				pointsFor: 1,
				requiredPer: 10
			}
		];
		
	};
	
	module.controller('draftPrepController', [draftPrepController]);
	
}(angular.module('ruthless')))