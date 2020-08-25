'use strict';

var sampleApp = angular.module("demo22",[]);

sampleApp.controller("demo22Ctrl",function($scope) {
    $scope.AllTopic=[];
    $scope.Display = function () {
        $scope.AllTopic.push($scope.Topic);
    }
});