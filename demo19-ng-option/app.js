'use strict';
var app = angular.module('ngoptionsApp', []);
app.controller('ngoptionsCtrl', function ($scope) {
    $scope.arrlist = [{
        "userid": 1,
        "name": "Suresh"
    }, {
        "userid": 2,
        "name": "Rohini"
    }, {
        "userid": 3,
        "name": "Praveen"
    }];
    $scope.userselected = $scope.arrlist[2];
});