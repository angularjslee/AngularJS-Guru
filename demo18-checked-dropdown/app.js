'use strict';
var app = angular.module('selectboxApp', []);
app.controller('selectboxCtrl', function ($scope) {
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
    $scope.checkselection = function () {
        if ($scope.userSelect != "" && $scope.userSelect != undefined)
            $scope.msg = 'Selected Value: '+$scope.userSelect;
        else
            $scope.msg = 'Please Select Dropdown Value';
    }
});