'use strict';







var app09 = angular.module('demo09',[]);
app09.controller('AngularController',function($scope){
    $scope.a=1;
    $scope.b=1;

    $scope.value=$scope.$eval('a+b');
});

