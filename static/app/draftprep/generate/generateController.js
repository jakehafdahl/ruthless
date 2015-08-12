'use strict';

(function (module) {
	var generateController = function ($scope, positionFieldOptions) {
		// grab players and scoring rules locally
		var vm = this;

		vm.scoringRules = $scope.prepView.scoringRules;
		vm.roster = $scope.prepView.roster;
		vm.projections = $scope.prepView.projections;
		vm.positions = positionFieldOptions;


		var calcFromRule = function (player, rule) {
            if (rule.requiredPer <= 0) {
                return 0;
            }
            return (player[rule.field] / rule.requiredPer) * rule.pointsFor;
        };
		
		var calcFantasyPoints = function(players, rules){
			angular.forEach(players, function (player) {
				var points = rules
					.filter(function (rule) { return rule.position === player.position })
					.map(function (rule) { return calcFromRule(player, rule) })
					.reduce(function (a, b) { return a + b; }, 0);
				player.fantasyPoints = points;
			});
			
			players.sort(function(a,b){ return a-b; });
		};
		
		var getBaselinePlayer = function(players, position, roster){
			var positionPlayers = players.filter(function(player){return player.position === position});
			var baselineIndex = 0;
			if(position === "QB"){
				baselineIndex += roster.roster.quarterbacks;
			}
			if(position === "RB"){
				baselineIndex += roster.roster.runningbacks;
			}
			if(position === "WR"){
				baselineIndex += roster.roster.widereceivers;
			}
			if(position === "TE"){
				baselineIndex += roster.roster.tightends;
			}
			if(position === "RB" || position === "WR"){
				baselineIndex += roster.roster.wrrbflex;
			}
			if(position === "RB" || position === "WR" || position === "TE"){
				baselineIndex += roster.roster.wrrbteflex;
			}
			if(position === "RB" || position === "WR" || position === "TE" || position === "QB"){
				baselineIndex += roster.roster.qbwrrbteflex;
			}
			
			baselineIndex = baselineIndex * roster.numberTeams;
			
			return baselineIndex > positionPlayers.length ? positionPlayers[positionPlayers.length - 1] : positionPlayers[baselineIndex];
		};
		
		var calculatePositionValues = function(players, roster) {

            return players.map(function(player) {
                player.vbd = player.fantasyPoints - getBaselinePlayer(players, player.position, roster).fantasyPoints;
            });
        }
		
		// calculate fantasy points and vbd values
		calcFantasyPoints(vm.projections.players, vm.scoringRules);
		calculatePositionValues(vm.projections.players, vm.roster);
		 
		// build tables
	};

	module.controller('generateController', ['$scope', 'positionFieldOptions', generateController]);
} (angular.module('ruthless')))