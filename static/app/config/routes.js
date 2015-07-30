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
                controller: "homeController",            
                controllerAs: 'homeView'
            })
            .state('articles', {
                url: "/Articles",
                templateUrl: "app/articles/articles.html",
                controller: "articlesController",            
                controllerAs: 'articlesView'
            })
            .state('article', {
                url: "/Article/:id",
                templateUrl: "app/article/article.html",
                controller: "articleController",            
                controllerAs: 'articleView'
            });
	}])	
}(angular.module('ruthless')))