'use strict';
var mainApp = angular.module("mainApp", []);
//AngularJS 中通过 provider 创建一个 service、factory等(配置阶段)。
//Provider 中提供了一个 factory 方法 get()，它用于返回 value/service/factory。
mainApp.config(function($provide) {
    $provide.provider('MathService', function() {
        this.$get = function() {
            var factory = {};

            factory.multiply = function(a, b) {
                return a * b;
            };
            return factory;
        };
    });
});

mainApp.value("defaultInput", 5);

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