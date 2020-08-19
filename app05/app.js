'use strict';

var app = angular.module('demo05',[]);
app.controller('firstcontroller', function($scope){
  $scope.pname="firstcontroller";
});
app.controller('secondcontroller', function($scope){
  $scope.lname="secondcontroller";
});