'use strict';

(function(module){

	module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.rule(function ($injector, $location) {
                var path = $location.path(), normalized = path.toLowerCase();
                if (path != normalized) {
                        // alter url instead of creating new to avoid state change event          
                        $location.replace().path(normalized);
                }
        });
                
        // For any unmatched url, redirect to /Home route
        $urlRouterProvider.otherwise("/home");
        $urlRouterProvider.when("/draftprep", "/draftprep/scoring");

        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/home/home.html",
                controller: "homeController",            
                controllerAs: 'homeView'
            })
            .state('articles', {
                url: "/articles",
                templateUrl: "app/articles/articles.html",
                controller: "articlesController",            
                controllerAs: 'articlesView'
            })
            .state('article', {
                url: "/article/:id",
                templateUrl: "app/article/article.html",
                controller: "articleController",            
                controllerAs: 'articleView'
            })
            .state('premiumArticle', {
                url: "/premium/article/:id",
                templateUrl: "app/article/article.html",
                controller: "premiumArticleController",            
                controllerAs: 'articleView'
            })
            .state('draftprep', {
                url: "/draftprep",
                templateUrl: "app/draftprep/draftprep.html",
                controller: "draftPrepController",            
                controllerAs: 'prepView'
            })
                .state('draftprep.scoring', {
                        url: "/scoring",
                        templateUrl: "app/draftprep/scoring/scoring.html",
                        controller: "scoringController",            
                        controllerAs: 'scoringView'
                })
                .state('draftprep.project', {
                        url: "/projections",
                        templateUrl: "app/draftprep/projections/projections.html",
                        controller: "projectionsController",            
                        controllerAs: 'projectView'
                })
                .state('draftprep.generate', {
                        url: "/generate",
                        templateUrl: "app/draftprep/generate/generate.html",
                        controller: "generateController",            
                        controllerAs: 'generateView'
                });
	}])	
}(angular.module('ruthless')))