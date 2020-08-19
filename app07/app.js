'use strict';

var app = angular.module('demo07', []);
app.controller('DemoCtrl7', function ($scope) {
    $scope.pName = "Guru99";

    $scope.Topics =
    {
        option1: "Controller",
        option2: "Module"
    };
});