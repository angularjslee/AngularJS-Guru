'use strict';
var app = angular.module('radibuttonApp', []);
app.controller('radiobuttonCtrl', function ($scope) {
    $scope.arrlist = [{
        "userid": 5,
        "name": "Suresh"
    }, {
        "userid": 2,
        "name": "Rohini"
    }, {
        "userid": 3,
        "name": "Praveen"
    }];
    $scope.checkoptions = function (choice) {
        if ($scope.selectVal!=undefined)
            $scope.msg = 'Selected Value: ' + $scope.selectVal;
        else
            $scope.msg = 'Please choose at least one option';
    };
});
