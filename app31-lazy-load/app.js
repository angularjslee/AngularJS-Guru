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
        controller: 'NodeController',
        resolve: {
            delay: function ($q) {
                var delay = $q.defer();
                setTimeout(function () {
                    delay.resolve();        // resolve 执行， 然后才开始后续操作
                }, 2000);
                return delay.promise;
            }
        }
    }).
    when("/user", {
        template: '<h2>User Center</h2>'
    }).
    when("/article", {
        template: '<p>article Center</p>'
    }).
    when("/setting", {
        template: '<p>Setting Center</p>'
    }).
    otherwise({redirectTo: '/'});
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