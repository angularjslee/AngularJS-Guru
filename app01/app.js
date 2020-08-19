'use strict';

// Declare app level module which depends on views, and core components
angular.module('demo01', []).controller("HelloWorldCtrl", function ($scope) {
    $scope.message = "Hello World";
});

