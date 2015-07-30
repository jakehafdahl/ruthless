'use strict';

(function(module){
	
	var homeContoller = function($scope, articleService){
		var vm = this;
		articleService.frontPageArticles().then(function(pageData){
			vm.featured = pageData.featured;
			vm.articles = pageData.articles;
		});
	};
	
	module.controller('homeController',[ '$scope', 'articleService',homeContoller])
}(angular.module('ruthless')))