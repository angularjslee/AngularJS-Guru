'use strict';

var sampleApp = angular.module("demo18", ['ngRoute']);

// sampleApp.config(['$routeProvider', function ($routeProvider) {       // This is error style
sampleApp.config(function ($routeProvider) {                            // This is correct style
    $routeProvider.
    when("/", {
        templateUrl: "main.htm"
    }).
    when('/Angular', {
        templateUrl: 'Angular.html',
        controller: 'AngularController'
    }).
    when("/Node", {
        templateUrl: 'Node.html',
        controller: 'NodeController'
    })
        .otherwise({redirectTo: '/'});
//}]);
});

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