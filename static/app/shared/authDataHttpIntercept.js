'use strict';
(function(module) {
    module.factory('authDataHttpIntercept', [
        '$q', '$injector', '$location', 'localStorageService', function($q, $injector, $location, localStorageService) {

            var authInterceptorServiceFactory = {};

            var _request = function(config) {

                config.headers = config.headers || {};
                delete config.headers.Authorization;
                
                var authData = localStorageService.get('authorizationData');
                if (config.url === '/login') {
                    config.headers.Authorization = 'Basic amF2YXNjcmlwdDphYmMxMjM='
                    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
                }
                
                if(authData && config.url !== '/login'){
                    config.headers.Authorization = 'Bearer ' + authData.token;
                }

                return config;
            }

            var _responseError = function(rejection) {
                return $q.reject(rejection);
            }

            authInterceptorServiceFactory.request = _request;
            authInterceptorServiceFactory.responseError = _responseError;

            return authInterceptorServiceFactory;
        }
    ]);
}(angular.module('ruthless')))