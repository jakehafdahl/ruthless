'use strict';

(function(module){
	var projectionsService = function($resource){
		
		var Projections = $resource('/projections', null,{
			defaults: {
                    url: '/projections/default',
                    method: 'GET',
					isArray: false
                }			
		});
		
		var getDefault = function(){
			return Projections.defaults()
		};
		
		return {
			getDefault: getDefault
		};	
	};
	
	module.factory('projectionsService',[ '$resource', projectionsService]);
	
}(angular.module('ruthless')))