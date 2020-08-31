'use strict';

var app = angular.module('demo24',[]);
//自定义的依赖可以是一个 JSON， 可以是一个函数（inverval）

//方法一： factory-JSON
app.factory('test', function () {
   return {
       a: 12,
       fn: function (num1, num2) {
           return num1 + num2
       }
   };
});

app.controller('cont1', function ($scope, test) {
    alert(test.a);
    alert(test.fn(12,12));
});
