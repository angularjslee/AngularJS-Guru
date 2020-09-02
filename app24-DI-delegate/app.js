'use strict';

var app = angular.module('demo24',[]);
app.factory('test', function () {
    return {
        a: 12,
        b: 5
    }
});

//只执行一次
app.decorator('test', function ($delegate) {
    //修改原先的
    $delegate.c = 99;
    return $delegate;
});

app.controller('cont1', function ($scope, test) {
    console.log('test', test)
});