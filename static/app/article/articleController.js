'use strict';

(function(module){
	var articleController = function(articleService, $stateParams){
		var vm = this;
		
		var id = $stateParams.id;
		
		articleService.get(id).then(function(article){
			vm.article = article;
		});
	};
	
	module.controller('articleController', ['articleService', '$stateParams', articleController]);
	
}(angular.module('ruthless')))