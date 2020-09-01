'use strict';

var app = angular.module('mouseApp', []);
// mouseenter：当鼠标移入某元素时触发。
// mouseleave：当鼠标移出某元素时触发。
// mouseover：当鼠标移入某元素时触发，移入和移出其子元素时也会触发。
// mouseout：当鼠标移出某元素时触发，移入和移出其子元素时也会触发。
// mousemove：鼠标在某元素上移动时触发，即使在其子元素上也会触发。
// mouseout、mouseover和mouseleave、mouseenter最大的区别，在于子元素连带触发。

app.controller('ngmousedownCtrl', function ($scope) {
    $scope.count = 0;
    $scope.getdetails = function () {
        $scope.count = $scope.count + 1;
    }
});

app.controller('ngmouseenterCtrl', function ($scope) {
    $scope.count = 0;
    $scope.getdetails = function () {
        $scope.count = $scope.count + 1;
    }
});

app.controller('ngmouseleaveCtrl', function ($scope) {
    $scope.count = 0;
    $scope.getdetails = function () {
        $scope.count = $scope.count + 1;
    }
});

app.controller('ngmousemoveCtrl', function ($scope) {
    $scope.count = 0;
    $scope.getdetails = function () {
        $scope.count = $scope.count + 1;
    }
});

app.controller('ngmouseoverCtrl', function ($scope) {
    $scope.count = 0;
    $scope.getdetails = function () {
        $scope.count = $scope.count + 1;
    }
});

app.controller('ngmouseupCtrl', function ($scope) {
    $scope.count = 0;
    $scope.getdetails = function () {
        $scope.count = $scope.count + 1;
    }
});