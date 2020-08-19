'use strict';

var app = angular.module('demo04',[]);
app.controller('DemoController', function($scope){

  $scope.TopicNames =[
    {name: "What controller do from Angular's perspective"},
    {name: "Controller Methods"},
    {name: "Building a basic controller"}];
});