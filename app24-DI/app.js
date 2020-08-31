'use strict';

var sampleApp = angular.module('demo24',[]);
// Value Dependency Injection
sampleApp.value("TutorialID", 5);
sampleApp.controller('demo25Ctrl', function($scope,TutorialID) {
    $scope.ID =TutorialID;
});

// Service Dependency Injection
sampleApp.service('AdditionService', function(){
    this.ADDITION = function(a,b) {
        return a+b;
    }
});

sampleApp.controller('serviceCtrl', function($scope, AdditionService) {
    $scope.result = AdditionService.ADDITION(5,7);
});
