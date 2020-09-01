'use strict';
var app = angular.module('ngcopyApp', []);
app.controller('ngcopyCtrl', function ($scope) {
    $scope.cuttext = false;
    $scope.copytext = false;
    $scope.pasttext = false;
});