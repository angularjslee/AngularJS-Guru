'use strict';
var app = angular.module('applyApp', []);
app.controller('applyCtrl', function ($scope) {
    $scope.currentDateTime = new Date();
    $scope.updatedtime = function () {
        $scope.currentDateTime = new Date();
    };
//Added an event listener.
    var event = document.getElementById("btnapply");
    event.addEventListener('click', function () {
//The $apply method is use to update date time on rootScope forcefully.
//        $apply 会 调用 $rootScope.$digest() 循环，检查 $scope 的属性变化
        $scope.$apply(function () {
//get dateTime
            $scope.currentDateTime = new Date();
        });
    });
});

//作用域提供了 ($watch) 方法：
//      监听数据模型的变化
//作用域提供了 ($apply) 方法：
//      把不是由Angular触发的数据模型的改变引入Angular的控制范围内
//      （如控制器，服务，及Angular事件处理器等）