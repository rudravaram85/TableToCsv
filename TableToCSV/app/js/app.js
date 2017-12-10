'use strict'

angular.module('TableToCsvApp',['ui.router','TableToCsvApp.controllers','TableToCsvApp.directives','TableToCsvApp.filters','TableToCsvApp.services','ngSanitize', 'ngCsv']);

angular.module('TableToCsvApp').config(['$httpProvider','$locationProvider',function($httpProvider,$locationProvider){
    
  



    	$locationProvider.html5Mode(true);


}]);

