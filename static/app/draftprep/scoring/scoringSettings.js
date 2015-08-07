'use strict';

(function(module){
	
	var scoringSettingsDirective = function(){
		return {
			restrict: 'E',
			scope: {
				scoringRules: '='
			},
			templateUrl: 'app/draftprep/scoring/scoring-settings.html',
			controller: 'scoringSettingsController',
			controllerAs: 'scoringSettingView'
		};
	};
	
	module.directive('scoringSettings', scoringSettingsDirective);
}(angular.module('ruthless')))