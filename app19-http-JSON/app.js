'use strict';
var app = angular.module('myServiceApp', []);
app.controller('myServiceCtrl', function ($scope, $http) {
    $scope.doJSONPRequest = function () {
        var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK";
        $http.jsonp(url)
            .success(function (data, status, headers, config) {
                $scope.details = data.found;
                $scope.statcode = status;
            })
            .error(function (data, status, headers, config) {
                $scope.statcode = status;
            });
    }
});