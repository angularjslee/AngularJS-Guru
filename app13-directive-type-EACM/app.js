'use strict';
var app = angular.module('demo13',[]);

app.controller('DemoController',function($scope) {
  $scope.tutorialName = "Angular JS";
});

app.directive('ngGuru',function(){
  return {
    template: '<div>{{tutorialName}}</div>'
  }
});

//智能社
//directive
//restrict 种类
  //E: element  元素
  //A: Attribute  属性
  //C: Class    类
  //M: Comment  注释
app.directive('elementdirective', function () {
  var json = {
    //约束，指令能用在哪儿
    restrict: 'E',
    //模板
    template: '<span>This is element directive</span>',
    replace: false
    /*
    当 replace 为 true:
    <span>This is element directive</span>
    当 replace 为 false:
     <elementdirective>
         <span>This is element directive</span>
     </elementdirective>
    */

  };
  return json;
});

app.directive('attributedirective', function () {
  var json = {
    restrict: 'A',
    template: '<span>This is attribute directive</span>'
  };
  return json;
});

app.directive('classdirective', function () {
  var json = {
    restrict: 'C',
    template: '<span>This is class directive</span>'
  };
  return json;
});

app.directive('commentdirective', function () {
  var json = {
    restrict: 'M',
    template: '<span>This is comment directive</span>',
    //comment 类型必须加replace 为 true
    replace: true
  };
  return json;
});

//1.取名字时：
//  不能出现下划线
//  不能出现横线
//  不能大写
//2.  transclude  嵌入，包裹
//    ng-transclude 占位符
//    transclude: true

//transclude
//1. 标签
//2. 属性

app.directive('cross', function () {
  var json = {
    restrict: 'A',
    template: '<ng-transclude></ng-transclude>  <a href="javascript:;">x</a>  <span ng-transclude></span>',
    transclude: true
  };
  return json;
});

app.controller('main', function ($scope) {
  $scope.show = false;
});

//指令-----自定义组件
app.directive('showmore', function () {
  return {
    restrict: 'E',
    template:
    '<div class="{{show?\'more2\':\'more\'}}">\
    <a href="javascript:;" ng-click="show=!show">Show More</a>\
    <span ng-transclude></span>\
    </div>',
    transclude: true
  }
});
