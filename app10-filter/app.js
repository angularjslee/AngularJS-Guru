'use strict';

var app = angular.module('demo10',[]);

app.controller('DemoController', function($scope){
  $scope.tutorialName = "Angular JS";

  $scope.tutorialID =3.565656;

  $scope.tutorialprice =20.56;

  $scope.tutorial ={TutorialID:12,tutorialName:"Angular"};
});

app.controller('zhinengsheCtrl', function ($scope) {
  $scope.arr = [12.5, 13.7, 99.8, 20];
  $scope.time = 1230903941212;
});

app.filter('customerFilter', function () {
  //alert('outer function');
  //外层函数执行初始化操作，只执行一次
  return function (input) {
    //alert('inner function');
    return input + 5
  }
});

app.controller('accountantCtrl', function ($scope) {
  $scope.arr = [
    {name: 'router', count: 5, price: -35},
    {name: 'chair', count: 3, price: 15},
    {name: 'pen', count: 20, price: 200}
  ]
});

app.filter('my_price', function () {
  return function (input, arg) {
    alert(input+ ", " + arg);
    //arg 对应filter的参数
    if (input < 0 ){
      return '('+(-input)+')'
    }
    return input
  }
});

app.filter('reverse', function() { //可以注入依赖
  return function(text) {
    return text.split("").reverse().join("");
  }
});
