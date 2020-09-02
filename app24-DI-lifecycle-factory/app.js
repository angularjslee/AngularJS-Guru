'use strict';

var app = angular.module('demo24',[]);
//自定义的依赖可以是一个 JSON， 可以是一个函数（inverval）

//方法一： factory-function
app.factory('val', function () {
    alert("run factory");
    //只执行一次
    return {a: 12}
});

app.controller('cont1', function ($scope, val) {
    alert(val.a);
});
app.controller('cont2', function ($scope, val) {
    alert(val.a);
});
app.controller('cont3', function ($scope, val) {
    alert(val.a);
});

//方法二
