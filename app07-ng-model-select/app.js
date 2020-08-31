'use strict';


var app = angular.module('demo07', []);
app.controller('DemoCtrl7', function ($scope) {
    $scope.pName = "Guru99";
    $scope.Topics =
    {
        nothing: null,
        option1: "Controller",
        option2: "Module"
    };
});

//after selected
app.controller('ExampleController', ['$scope', function($scope) {
    $scope.data = {
        singleSelect: null,
        multipleSelect: [],
        option1: 'option-1'
    };

    $scope.forceUnknownOption = function() {
        $scope.data.singleSelect = 'nonsense';
    };
}]);