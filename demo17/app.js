'use strict';
var app = angular.module('demo17', []);
app.directive('ngGuru', function () {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me');
            });
        }
    }
});
