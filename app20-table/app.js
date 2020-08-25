'use strict';

var app = angular.module('demo20', []);

app.controller('demo20Ctrl', function ($scope) {

    $scope.tutorial = [
        {Name: "Controllers", Description: "Controllers in action"},
        {Name: "Models", Description: "Models and binding data"},
        {Name: "Directives", Description: "Flexibility of Directives"}
    ]
});