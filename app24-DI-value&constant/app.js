'use strict';

var sampleApp = angular.module('demo24',[]);
// Value Dependency Injection
sampleApp.value("TutorialID", 5);
//可以修改常量
sampleApp.decorator('TutorialID', function ($delegate) {
    return $delegate + 1
});
sampleApp.controller('demo25Ctrl', function($scope, TutorialID) {
    $scope.ID =TutorialID;
});


//Constant  : 常量 不可装饰
sampleApp.constant('VERSION', 10);
//不能修改常量
//sampleApp.decorator('VERSION', function ($delegate) {
//    return $delegate + 1
//});
sampleApp.controller('cont2', function ($scope, VERSION) {
    alert(VERSION);
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
