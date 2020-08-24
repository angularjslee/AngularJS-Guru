'use strict';
var app = angular.module('test', []);
app.controller('cont1', function ($scope, $http) {
/*
    //$http.get(url, 参数);
    $http.get('a.php', {
        params: {a: 12, b: 5}
        //第一种解析方式
        //responseType: 'json'
    }).then(function (res) {
        alert('YES');
        alert(res.data);
        //解析
        //1） JSON.parse
        //2） eval
        //2） new function

    }, function () {
        alert('NO')
    })
*/
    $http.get('a.php', {
        params: {a: 12, b: 5}
    }).success(function (res) {
        alert("OH YES");
        alert(res)          //  正常应该直接显示结果
    }).error(function () {
        alert("Oh No")
    })
});
