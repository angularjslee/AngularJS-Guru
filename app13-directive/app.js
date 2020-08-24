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
