'use strict';
var app = angular.module('formApp', []);
app.controller('formCtrl', function ($scope) {

    $scope.sendForm = function () {
        $scope.msg='Form Submited Successfully';
    };

    $scope.getClass = function (color) {
        return color.toString();
    }
});