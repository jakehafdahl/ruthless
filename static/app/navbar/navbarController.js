'use strict';

(function(module){
	var navbarController = function(authenticate, userService){
		var vm = this;
		
		vm.user = userService.user;
		
		this.signOn = function(){
			authenticate().then(function(credentials){
				console.log(credentials.username);
				userService.login(credentials)
			});
		};
	};
	
	module.controller('navbarController',['authenticate', 'userService', navbarController]);
	
}(angular.module('ruthless')))