'use strict';

var app = angular.module('demo15-4', []);

app.controller("myController", function ($scope) {
    $scope.user = {
        name: 'hello',
        id: 1
    };
}).directive("isolatedDirective", function () {
    return {
        scope: {
            user: "="
        },
        template: 'Say：{{user.name}} <br>改变隔离scope的name：<input type="buttom" value="" ng-model="user.name"/>'
    }
});
//  =
//  Two-way model binding
//  ( Direct model binding / two-way binding )
//  binding is for two-way model binding. The model in parent scope is linked to the model in the directive's isolated scope. Changes to one model affects the other, and vice versa.