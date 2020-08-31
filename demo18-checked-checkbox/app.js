'use strict';
var app = angular.module('checkboxApp', []);
app.controller('checkboxCtrl', function ($scope) {
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
    $scope.checkoptions = function (choice) {
        var details = [];
        angular.forEach(choice, function (value, key) {
            if (choice[key].checked) {
                details.push(choice[key].userid);
            }
        });
        if (details.length > 0)
            $scope.msg = 'Selected Values: '+details.toString();
        else
            $scope.msg = 'Please choose an option';
    };
});
