'use strict';

(function(module){
	var articleController = function(articleService, $stateParams, $sce){
		var vm = this;
		
		var id = $stateParams.id;
		
		articleService.get(id).then(function(article){
			vm.article = article;
			vm.article.content = $sce.trustAsHtml(vm.article.content);
		});
	};
	
	module.controller('articleController', ['articleService', '$stateParams', '$sce', articleController]);
	
}(angular.module('ruthless')))