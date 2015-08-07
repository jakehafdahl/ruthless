'use strict';

(function(module){
	
	var serverConfig = {
		articles: '/articles',
		basicCreds: 'Basic amF2YXNjcmlwdDphYmMxMjM='
	};
	
	module.value('serverConfig', serverConfig);
	
}(angular.module('ruthless')))