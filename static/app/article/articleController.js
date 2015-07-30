'use strict';

(function(module){
	var articleController = function(articleService, $stateParams){
		var vm = this;
		
		vm.message = $stateParams.id;
	};
	
	module.controller('articleController', ['articleService', '$stateParams', articleController]);
	
}(angular.module('ruthless')))