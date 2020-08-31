'use strict';
var app = angular.module('postserviceApp', []);
app.controller('postserviceCtrl', function ($scope, $http) {
    $scope.name = null;
    $scope.age = null;
    $scope.adress = null;
    $scope.lblMsg = null;
    $scope.postdata = function (name, age, adress) {
        var data = {
            name: name,
            age: age,
            adress: adress
        };
//Call the services
        $http.post('/api/users/post', JSON.stringify(data)).then(function (response) {
            if (response.data)
                $scope.msg = "Post Data Submitted Successfully!";
        }, function (response) {
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };
});