'use strict';

(function(module){
	
	var homeContoller = function($scope, articleService){
		var vm = this;
		articleService.frontPageArticles().then(function(articles){
			vm.articles = articles;
		});
	};
	
	module.controller('homeController',[ '$scope', 'articleService',homeContoller])
}(angular.module('ruthless')))