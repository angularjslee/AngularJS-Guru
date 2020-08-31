'use strict';
var app = angular.module("demo21", []);
app.controller("cont1", function ($scope) {
    $scope.str = '';
   $scope.arr=['az', 'cd', 'df', 'ed', 'ac'];
});

app.directive("dropdownlist", function () {
    //alert('directive run');   //只执行一次
    return {
        restrict: 'E',
        template: '<input type="text" ng-model="str"><ng-transclude></ng-transclude> <ul><li ng-repeat="v in arr" ' +
        'ng-show="v.indexOf(str)!=-1">{{v}}, {{v.indexOf(str)!=-1}}</li></ul>',
        transclude: true
    }
});

//指令
//1. 创建一堆元素
//2. 重用