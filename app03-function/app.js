'use strict';

var app = angular.module("demo03", []);
app.controller("DemoController", function($scope) {

  $scope.fullName=function(firstName, lastname){
    return firstName + lastname;
  }
} );
