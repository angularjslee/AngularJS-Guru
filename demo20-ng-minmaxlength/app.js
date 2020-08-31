'use strict';
var app = angular.module('formApp', []);
app.controller('formCtrl', function ($scope) {
    $scope.sendForm = function () {
        $scope.msg = "Form Validated";
    };
});
app.controller('ngmaxlengthCtrl', function ($scope) {
    $scope.sendForm = function () {
        $scope.msg = "Form Validated";
    };
});

app.controller('ngminmaxlengthCtrl', function ($scope) {
    $scope.sendForm = function () {
        $scope.msg = "Form Validated";
    };
});

