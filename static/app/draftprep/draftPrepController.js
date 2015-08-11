'use strict';

(function(module){
	var draftPrepController = function(projectionsService){
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
                    field: "rushyards",
                    requiredPer: 10,
                    pointsFor: 1,
                    position: "RB"
                },
                {
                    field: "rushtd",
                    requiredPer: 1,
                    pointsFor: 6,
                    position: "RB"
                },
                {
                    field: "receptionyards",
                    requiredPer: 10,
                    pointsFor: 1,
                    position: "RB"
                },
                {
                    field: "receptiontd",
                    requiredPer: 1,
                    pointsFor: 6,
                    position: "RB"
                },
                {
                    field: "rushyards",
                    requiredPer: 10,
                    pointsFor: 1,
                    position: "WR"
                },
                {
                    field: "rushtd",
                    requiredPer: 1,
                    pointsFor: 6,
                    position: "WR"
                },
                {
                    field: "receptionyards",
                    requiredPer: 10,
                    pointsFor: 1,
                    position: "WR"
                },
                {
                    field: "receptiontd",
                    requiredPer: 1,
                    pointsFor: 6,
                    position: "WR"
                },
                {
                    field: "receptionyards",
                    requiredPer: 10,
                    pointsFor: 1,
                    position: "TE"
                },
                {
                    field: "receptiontd",
                    requiredPer: 1,
                    pointsFor: 6,
                    position: "TE"
                },
                {
                    field: "rushyards",
                    requiredPer: 10,
                    pointsFor: 1,
                    position: "QB"
                },
                {
                    field: "rushtd",
                    requiredPer: 1,
                    pointsFor: 6,
                    position: "QB"
                },
                {
                    field: "passyards",
                    requiredPer: 20,
                    pointsFor: 1,
                    position: "QB"
                },
                {
                    field: "passtd",
                    requiredPer: 1,
                    pointsFor: 4,
                    position: "QB"
                },
                {
                    field: "interceptionsthrown",
                    requiredPer: 1,
                    pointsFor: -1,
                    position: "QB"
                },
                {
                    field: "xpmade",
                    requiredPer: 1,
                    pointsFor: 1,
                    position: "K"
                },
                {
                    field: "fgmade",
                    requiredPer: 1,
                    pointsFor: 3,
                    position: "K"
                },
                {
                    field: "sacks",
                    requiredPer: 1,
                    pointsFor: 1,
                    position: "DST"
                },
                {
                    field: "fumbles",
                    requiredPer: 1,
                    pointsFor: 2,
                    position: "DST"
                }
		];
		
		vm.projections = projectionsService.getDefault();
		
	};
	
	module.controller('draftPrepController', ['projectionsService', draftPrepController]);
	
}(angular.module('ruthless')))