'use strict';

var app = angular.module('demo17',[]);

app.controller('ngShowCtrl',function($scope){
  $scope.IsVisible = false;

  $scope.ShowHide = function(){
    $scope.IsVisible = true;
  }
});

app.controller('ngHideCtrl',function($scope){
  $scope.IsVisible = false;

  $scope.ShowHide = function(){
    $scope.IsVisible = !$scope.IsVisible;
  }
});
