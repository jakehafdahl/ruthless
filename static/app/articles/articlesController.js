'use strict';

(function(module){
	var articlesController = function(articleService, $stateParams){
		var vm = this;
		var currentPage = $stateParams.page ? $stateParams.page : 1;
		
		articleService.getArticles({page:currentPage}).then(function(articles){
			vm.articles = articles;
		});
	};
	
	module.controller('articlesController',['articleService', '$stateParams', articlesController]);
}(angular.module('ruthless')))