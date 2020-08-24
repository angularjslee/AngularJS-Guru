'use strict';

var sampleApp = angular.module("demo18", ['ngRoute']);

sampleApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/Angular', {
    templateUrl: '/Angular.html',
    controller: 'AngularController'
  }).
  when("/Node", {
    templateUrl: '/Node.html',
    controller: 'NodeController'
  });
}]);

sampleApp.controller('AngularController', function ($scope) {

  $scope.tutorial = [
    {Name: "Controllers", Description: "Controllers in action"},
    {Name: "Models", Description: "Models and binding data"},
    {Name: "Directives", Description: "Flexibility of Directives"}
  ]
});

sampleApp.controller('NodeController', function ($scope) {

  $scope.tutorial = [
    {Name: "Promises", Description: "Power of Promises"},
    {Name: "Event", Description: "Event of Node.js"},
    {Name: "Modules", Description: "Modules in Node.js"}
  ]
});