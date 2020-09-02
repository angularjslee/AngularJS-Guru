'use strict';

var app = angular.module('demo27',[]);
//$location
app.controller('locationCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
    $scope.urlhost = $location.host();
    $scope.urlport = $location.port();
    $scope.urlprotocol = $location.protocol();
});

//$timeout
app.controller('timeoutCtrl', function($scope, $timeout) {
    $scope.myHeader = "Hello World!";
    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);
});

//$interval
app.controller('intervalCtrl', function($scope, $interval) {
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
});

//customer service
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);  //  参数代表进制数
    }
});
app.controller('hexafyCtrl', function($scope, hexafy) {
    $scope.hex = hexafy.myFunc(255);
});

app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);