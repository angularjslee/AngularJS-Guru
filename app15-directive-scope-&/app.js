'use strict';

var app = angular.module('demo15-5', []);

app.controller("myController", function ($scope) {
    $scope.value = "hello world";
    $scope.click = function () {
        $scope.value = Math.random();
    };
}).directive("isolatedDirective", function () {
    return {
        scope: {
            action: "&"
            //action: "="  // 不知为何也起作用
        },
        template: '<input type="button" value="在directive中执行父scope定义的方法" ng-click="action()"/>'
    }
});

//  & 
//  Callback method binding
//  ( Behaviour binding / Method binding  )
//  binding is for passing a method into your directive's scope so that it can be called within your directive. The method is pre-bound to the directive's parent scope, and supports arguments. For example if the method is hello(name) in parent scope, then in order to execute the method from inside your directive, you must call $scope.hello({name:'world'})
