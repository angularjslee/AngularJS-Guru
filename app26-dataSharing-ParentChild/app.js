'use strict';

var app = angular.module('demo26',[]);
app.controller("parentCtrl", function ($scope) {
    $scope.message = "I'm parent.";
});
app.controller("childCtrl", function ($scope) {
    alert($scope.message)
});

