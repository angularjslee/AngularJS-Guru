'use strict';
var app = angular.module('demo21', []);

app.controller("demo21Ctrl", function ($scope) {
    $scope.Display = function () {
        $scope.user = 'Angular';
    }
});

app.controller('ExampleController', ['$scope', function ($scope) {
    $scope.email = {
        text: 'me@example.com'
    }
}]);