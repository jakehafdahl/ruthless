'use strict';

(function(module){
	function userService($resource, localStorageService) {

        var localUser = {
            isAuth: false,
            username: ""
        };

        var userResource = $resource('/user/:id', null,
            {
                register: {
                    url: '/user/register',
                    method: 'POST'
                },
                login: {
                    url: '/login',
                    method: 'POST'
                },
                query: {
                    method: 'GET',
                    isArray: false
                }
                
            }
        );

        var register = function(user) {
            return userResource.register(user);
        };

        var login = function (user, rememberMe) {
            var data = $.param({
                grant_type: 'password',
                username: user.username,
                password: user.password
            });
            // set the http header with the bearer token
            // store the token on a cookie
            // set user info
            return userResource.login(data).$promise.then(function(token) {
                localStorageService.set("authorizationData",
                        {
                            token: token.access_token
                        });
                userResource.query({}).$promise.then(function(data){
                    localUser.username = data.username;
                    localUser.isAuth = true;
                    localUser.id = data._id;
                    localUser.email = data.email;
                    localStorageService.set("authorizationData",
                        {
                            token: token.access_token,
                            username : data.username,
                            isAuth: true,
                            id: data._id,
                            email: data.email
                        }
                    );
                    if (user.rememberMe) {
                        localStorageService.cookie.set("authorizationData",
                            {
                                token: token.access_token,
                                username : data.username,
                                isAuth: true,
                                id: data._id,
                                email: data.email
                            }
                        );
                    }
                })
            });
        };

        var fillAuthData = function () {

            var authData = localStorageService.cookie.get('authorizationData');
            if (authData) {
                localUser.isAuth = true;
                localUser.username = authData.username;
                localUser.id = authData.id;
            }

        };

        var logOut = function() {
            localUser.isAuth = false;
            delete localUser.username;
            localStorageService.remove('authorizationData');
            localStorageService.cookie.remove('authorizationData');
        };


        return {
            register: register,
            login: login,
            fillAuthData: fillAuthData,
            user: localUser,
            logOut: logOut
        };
    }

    module.factory('userService', ['$resource', 'localStorageService', userService]);

}(angular.module('ruthless')))