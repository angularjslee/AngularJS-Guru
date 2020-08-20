'use strict';

var app = angular.module('demo11',[]);
app.filter('Demofilter',function(){
  return function(input)
  {
    return input + " Tutorial"
  }
});

app.controller('DemoController',function($scope){

  $scope.tutorial ="Angular";
});