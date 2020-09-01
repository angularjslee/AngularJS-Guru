'use strict';
var app = angular.module('ngfocusApp', []);
app.controller('ngfocusCtrl', function ($scope) {
    $scope.focusfn = function () {
        $scope.focus = true;
        $scope.ftxt='Focused'
    };
    $scope.blurfn = function () {
        $scope.focus = false;
        $scope.ftxt = ''
    }
});