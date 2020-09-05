'use strict';

angular.module('demo27', [])
    .controller('EventController', ['$scope', function ($scope) {
        $scope.count = 0;
        //负责接收
        $scope.$on('MyEvent', function () {
            $scope.count++;
        });
    }]);