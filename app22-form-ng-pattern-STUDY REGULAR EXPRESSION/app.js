'use strict';
angular.module('ngPatternExample', [])
    .controller('ExampleController', function ($scope) {
        $scope.regex = '\\d+';
    });