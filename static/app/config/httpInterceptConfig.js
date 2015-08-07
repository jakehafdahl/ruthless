
(function(module){

	module.config(['$httpProvider',function ($httpProvider) {
            $httpProvider.interceptors.push('authDataHttpIntercept');
        }])
		.config(['localStorageServiceProvider',function (localStorageServiceProvider) {
            localStorageServiceProvider
              .setStorageCookie(45);
        }])
        .run(['userService', function (userService) {
            userService.fillAuthData();
        }]);
	
}(angular.module('ruthless')))