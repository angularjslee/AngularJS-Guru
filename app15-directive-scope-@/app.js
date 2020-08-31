'use strict';

//refer to https://blog.coding.net/blog/angularjs-directive-isolate-scope
var app = angular.module('demo15-3', []);

app.controller("myController", function ($scope) {
    $scope.name = "hello world";
}).directive("isolatedDirective", function () {
    return {
        scope: {
            name: "@"
        },
        template: 'Say：{{name}} <br>改变隔离scope的name：<input type="buttom" value="" ng-model="name" class="ng-pristine ng-valid">'
    }
});

//  @ 
//  Attribute string binding
//  (  Text binding / one-way binding )
//  binding is for passing strings. These strings support {{}} expressions for interpolated values. For example: . The interpolated expression is evaluated against directive's parent scope.