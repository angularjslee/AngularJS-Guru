'use strict';

var app = angular.module('demo26',[]);
app.controller("parentCtrl", function ($scope, $timeout) {
    $scope.message =12;

    $timeout(function () {
        alert($scope.message);
    }, 1000);
});

app.controller("childCtrl", function ($scope) {
    //虽能继承，但只是复制，并不同步
    $scope.message++;
    alert($scope.message);
});

//引入消息机制，类似事件

