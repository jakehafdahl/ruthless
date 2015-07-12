'use strict';

(function(module){

	module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // For any unmatched url, redirect to /Home route
        $urlRouterProvider.otherwise("/Home");

        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/Home",
                templateUrl: "app/home/home.html",
                controller: "homeController"
            });
	}])	
}(angular.module('ruthless')))