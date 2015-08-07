'use strict';

(function(module){
	
	var rosterSettingsDirective = function(){
		return {
			restrict: 'E',
			scope: {
				roster: '='
			},
			templateUrl: 'app/draftprep/scoring/roster-settings.html'
		};
	};
	
	module.directive('rosterSettings', rosterSettingsDirective);
}(angular.module('ruthless')))