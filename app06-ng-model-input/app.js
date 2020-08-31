'use strict';


var app = angular.module('demo06', []);
app.controller('DemoCtrl', function ($scope) {
    $scope.pDescription = "How Angular JS works"
});
app.controller('DemoCtrl1', function ($scope) {
    $scope.pname = "Guru99";

    $scope.Topic =
    {
        Controller: true,
        Models: false
    };
});


