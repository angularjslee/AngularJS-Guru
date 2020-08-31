'use strict';

var app = angular.module('dem015-2', []);

//为了重用，所以directive不能总是依赖父scope，因而提出隔离scope
//区分共享 scope 和 隔离scope
app.controller("myController", function ($scope) {
    $scope.name = "hello world";
}).directive("shareDirective", function () {
    return {
        template: 'Say:{{name}}'
    }
});
app.controller("yourController", function ($scope) {
    $scope.name = "hello world";
}).directive("isolatedDirective", function () {
    return {
        scope: {},
        template: 'Say:{{name}}'
    }
});
