'use strict';
var sampleApp = angular.module('demo08', ["ngRoute"]);
sampleApp.config(function ($routProvider) {
    $routProvider
        .when("/NewEvent", {
            templateUrl: "add_event.html",
            controller: "AddEventController"
        })
        .when('/DisplayEvent', {
            templateUrl: 'show_event.html',
            controller: 'ShowDisplayController'
        })
        .otherwise({
            redirectTo: "/DisplayEvent"
        });
});

sampleApp.controller('AddEventController', function ($scope) {
    $scope.message = "This is to Add a new Event";
});

sampleApp.controller('ShowDisplayController', function ($scope) {
    $scope.message = "This is display an Event";
});
