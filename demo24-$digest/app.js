'use strict';
var app = angular.module('digestApp', []);
app.controller('digestCtrl', function ($scope) {
    $scope.currentDateTime = new Date();
    $scope.updatedtime = function () {
        $scope.currentDateTime = new Date();
    };
//Added an event listener.
    var event = document.getElementById("btndigest");
    event.addEventListener('click', function () {
//get dateTime
        $scope.currentDateTime = new Date();
//The digest method is use to update date time forcefully.
//        手动调用$digest() 循环
        $scope.$digest();

/*
    $apply 和 $digest 是AngularJS 中两个核心概念。深层理解双向数据绑定，必须了解他们。
    当写下 {{}} AngularJS 会在后台为 $scope设置一个watcher, 用来在数据变化时更新 View,
            这里的watcher 和 5.3.2 中手动调用 $watch 一样。
    $scope.$watch('name', function (newValue, oldValue) {
        // update the DOM with newValue
    })
        上面这三行代码，name 变化，回调方法会被调用来更新 View
        但 AngularJS 是如何知道什么时候要回调这个方法呢？
    它会周期性的运行一个函数来检查scope 模型中的数据是否发生了变化，即所谓的 $digest。
    在 $digest 循环中， watchers 被触发。
    当watcher 触发，AngularJS 会检测 scope 模型的变化，进而关联到该watcher 的回调方法就会被调用。
    但 $digest 循环是在什么时候以各种方式开始的呢？
    在调用 $scope.$digest() 后， $digest 循环开始。
    假设 ng-click 修改scope, AngularJS 会自动调用 $digest 来触发一轮 $digest循环。
    当 $digest 循环开始，它会触发每个 watcher, 检查 scope 中 当前属性 是否和上一次$digest循环时候的属性相同。若不同，执行回调函数。
    调用的结果就是View 内容被更新，

    除了ng-click，其他内置指令和服务 能更改模型数据（ng-model, $timeout 等） 和 自动触发一次 $digest 循环

    另外， $apply 会 调用 $rootScope.$digest().
    因此，一轮 $digest 循环在 $rootScope 开始，随后会访问所有子作用域中的 watcher.
*/

    });
});