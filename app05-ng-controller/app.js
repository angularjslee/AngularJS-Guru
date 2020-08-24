'use strict';
var app = angular.module('demo05', []);
//define controller
app.controller('firstcontroller', function ($scope, $http) {
    $scope.pname = "firstcontroller";
    alert(arguments.length);
    $scope.show = function (s) {
        alert(s)
    }
});
//Multiple
app.controller('secondcontroller', function ($scope) {
    $scope.lname = "secondcontroller";
});

//Another write style
//不推荐但要看懂，如果非要自己命名
app.controller('thirdcontroller', ['$scope', '$http', function (a) {
    a.a = 12
}]);