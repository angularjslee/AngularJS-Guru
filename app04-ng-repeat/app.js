
'use strict';
var app = angular.module('demo04', []);
app.controller('DemoController', function ($scope) {

    $scope.TopicNames = [
        {name: "What controller do from Angular's perspective"},
        {name: "Controller Methods"},
        {name: "Building a basic controller"}];

    $scope.json = {
        a: "abc",
        b: 15,
        c: true
    };

    $scope.array1 = [2134, 34, 1, 7, 23, 9568];

    $scope.users = [
        {
            name: "blue",
            age: 18
        },
        {
            name: "zhangsanfeng",
            age: 116
        }

    ]
});



