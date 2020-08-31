'use strict';

var app = angular.module('demo24', []);
app.provider('testPro', function () {
    this.$get = function () {
        return {
            a: 12,
            b: 5
        }
    };
});

app.controller('cont1', function ($scope, testPro) {
    alert(JSON.stringify(testPro));     // JSON 变成字符串
    alert(testPro.a)
});


