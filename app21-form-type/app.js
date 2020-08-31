'use strict';
var app = angular.module('demo21Type', []);

app.controller("typeCtrl", function ($scope) {
    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

app.controller('formCtrl', function ($scope) {
    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});