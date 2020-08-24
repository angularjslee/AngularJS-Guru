'use strict';

var app = angular.module('demo14',[]);

app.controller('DemoController',function() {
  this.tutorialName = "Angular";
});

app.directive('ngGuru99',function(){
  return {
    controller: 'DemoController',
    controllerAs: 'ctrl',
    template: '{{ctrl.tutorialName}}'
  };
});
