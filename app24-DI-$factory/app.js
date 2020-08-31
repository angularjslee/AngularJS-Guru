'use strict';
var mainApp = angular.module("mainApp", []);
//Value 是一个简单的 javascript 对象，用于向控制器传递值（配置阶段）：
mainApp.value("defaultInput", 5);

//factory 是一个函数用于返回值。在 service 和 controller 需要时创建。
//通常我们使用 factory 函数来计算或返回值。
mainApp.factory('MathService', function() {
    var factory = {};

    factory.multiply = function(a, b) {
        return a * b;
    };
    return factory;
});

mainApp.service('CalcService', function(MathService){
    this.square = function(a) {
        return MathService.multiply(a,a);
    }
});

mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
    $scope.number = defaultInput;
    $scope.result = CalcService.square($scope.number);

    $scope.square = function() {
        $scope.result = CalcService.square($scope.number);
    }
});
