'use strict';

// Declare app level module which depends on views, and core components
/*
angular.module('myApp', [
  //'ngRoute',
  //'myApp.view1',
  //'myApp.view2',
  //'myApp.version'
]).controller("HelloWorldCtrl", function($scope) {
  $scope.message="Hello World";
});
*/
//config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//  $locationProvider.hashPrefix('!');
//  $routeProvider.otherwise({redirectTo: '/view1'});
//}]);f

var app = angular.module('DemoApp',[]);

app.controller('DemoController', function($scope){
  $scope.tutorialName = "Angular JS";
});
