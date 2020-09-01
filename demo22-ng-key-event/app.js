'use strict';
var app = angular.module('keyApp', []);
app.controller('ngkeydownCtrl', function ($scope) {
    $scope.getkeys = function (event) {
        $scope.keyval = event.keyCode;
    }
});

app.controller('ngkeypressCtrl', function ($scope) {
    $scope.getkeys = function (event) {
        $scope.keyval = event.keyCode;
    }
});

app.controller('ngkeyupCtrl', function ($scope) {
    $scope.getkeys = function (event) {
        $scope.keyval = event.keyCode;
    }
});

//keypress 和 keydown 有什么区别
//用户按“a”键，该键将被预处理和调度，同时会触发KeyDown事件。
//用户按住“a”键，该键将被预处理和调度，同时会触发KeyPress事件。
//用户松开“a”键，该键将被预处理和调度，同时会触发KeyUp事件。
