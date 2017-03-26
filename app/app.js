(function(){
	'use strict';

	angular.module('tijo-test-gr-1', [ 'ngRoute','tijo-test-gr-1-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();