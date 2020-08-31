'use strict';

var app = angular.module('demo19', []);

app.controller('ajaxCtrl', function ($scope, $http) {
    $http.get("https://api.npms.io/v2/search?q=scope:angular")
        //$http.get("https://www.runoob.com/try/angularjs/data/sites.php")
        //$http.get("http://localhost:8000/books")
        .then(function (response) {
            $scope.names = response.data.results;
            //alert(response.data.total);
            console.log(response.data);
        });
});