'use strict';
(function (module) {
    
    var authenticate = function ($modal) {
        return function() {

            var options = {
                templateUrl: "app/shared/authenticate.html"
            };

            return $modal.open(options).result;
        }
    };

    module.factory('authenticate', ['$modal', authenticate]);
}(angular.module('ruthless')))