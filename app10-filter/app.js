'use strict';

var app = angular.module('demo10',[]);

app.controller('DemoController', function($scope){
  $scope.tutorialName = "Angular JS";

  $scope.tutorialID =3.565656;

  $scope.tutorialprice =20.56;

  $scope.tutorial ={TutorialID:12,tutorialName:"Angular"};
});
