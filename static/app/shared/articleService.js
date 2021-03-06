'use strict';

(function(module){
	var articleService = function($resource, serverConfig){
		
		var Articles = $resource(serverConfig.articles + '/:id', {}, 
			{
				'frontPage':  {method:'GET', isArray: false, url: '/articles/frontpage'},
				'getPremium': {method:'GET', isArray: false, url: '/premium/articles/:id'}
			});
		
		var frontPageArticles = function(params){
			return Articles.frontPage(params).$promise;
		};
		
		var getArticles = function(params){
			return Articles.query(params).$promise;
		};
		
		var get = function(id, user){
			if(user.isAuth){	
				return Articles.getPremium({id:id}).$promise;
			}else{	
				return Articles.get({id:id}).$promise;
			}
		};
		
		return {
			frontPageArticles : frontPageArticles,
			getArticles : getArticles,
			get : get
		};
	};
	
	
	module.factory('articleService',['$resource', 'serverConfig', articleService])
}(angular.module('ruthless')))