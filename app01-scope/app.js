'use strict';

var app = angular.module('demo01',[]);
app.controller("HelloWorldCtrl", function ($scope, $http) {
    $scope.message = "Hello World";
});

