'use strict';

var sampleApp = angular.module('demo24',[]);
sampleApp.controller('demo24Ctrl', function($scope) {
    $scope.tutorial =[
        {Name: "Controllers" , Description : "Controllers in action"},
        {Name: "Models" , Description : "Models and binding data"},
        {Name: "Directives" , Description : "Flexibility of Directives"}
    ];

});