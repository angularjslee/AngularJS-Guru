'use strict';
var app = angular.module('checkboxApp', []);
app.controller('checkboxCtrl', function ($scope) {
    $scope.validationmsg = false;
    $scope.checkvalidation = function () {
        var chkselct = $scope.chkselct;
        if (chkselct == false || chkselct == undefined)
            $scope.validationmsg = true;
        else
            $scope.validationmsg = false;
    }
});