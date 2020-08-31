'use strict';

var app = angular.module('demo28',[]);
app.controller('selectCtrl', function($scope) {
    //拿数组作为数据源
    $scope.names = ["Google", "Runoob", "Taobao"];
    $scope.sites = [
        {site : "Google", url : "http://www.google.com"},
        {site : "Runoob", url : "http://www.runoob.com"},
        {site : "Taobao", url : "http://www.taobao.com"}
    ];
    //拿对象作为数据源
    $scope.places = {
        site01 : "Google",
        site02 : "Runoob",
        site03 : "Taobao"
    };
    $scope.cars = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
    };
});

