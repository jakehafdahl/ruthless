'use strict';

(function(module){
	var articleCardDirective = function(){
		return {
			restrict: 'E',
			scope: {
				article: '='
			},
			templateUrl: 'app/shared/article-card.html'
		};
	};
	
	module.directive('articleCard',articleCardDirective)
}(angular.module('ruthless')))