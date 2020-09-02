'use strict';

var app = angular.module('demo24',[]);
//自定义的依赖可以是一个 JSON， 可以是一个函数（inverval）

//方法一： factory-function
app.factory('sum', function () {
   return function (num1, num2) {
       return num1 + num2
   }
});

app.controller('cont1', function ($scope, sum) {
    alert(typeof sum);
    alert(sum(1,2));
});

