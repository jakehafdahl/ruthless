'use strict';

(function(module){
	var articleController = function(articleService, $stateParams, $sce, userService){
		var vm = this;
		
		var id = $stateParams.id;
		
		articleService.get(id, userService.user).then(function(article){
			vm.article = article;
			vm.article.content = $sce.trustAsHtml(vm.article.content);
		});
	};
	
	module.controller('articleController', ['articleService', '$stateParams', '$sce', 'userService',articleController]);
	
}(angular.module('ruthless')))