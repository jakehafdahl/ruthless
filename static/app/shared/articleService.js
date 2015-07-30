'use strict';

(function(module){
	var articleService = function($resource, serverConfig){
		
		var Articles = $resource(serverConfig.articles + '/:id');
		
		var frontPageArticles = function(params){
			return Articles.query(params).$promise;
		};
		
		var getArticles = function(params){
			return Articles.query(params).$promise;
		};
		
		return {
			frontPageArticles : frontPageArticles,
			getArticles : getArticles
		};
	};
	
	
	module.factory('articleService',['$resource', 'serverConfig', articleService])
}(angular.module('ruthless')))