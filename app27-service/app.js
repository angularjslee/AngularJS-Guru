'use strict';

var app = angular.module('demo27',[]);
//$location
app.controller('locationCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
    console.log($location);
    $scope.urlhost = $location.host();
    $scope.urlport = $location.port();
    $scope.urlprotocol = $location.protocol();
});

//$location 相关事件
//$locationChangeStart
//该事件会在调用 $location 的一些方法（例如path()方法）改变浏览器地址之前触发，传到 $rootScope
//$locationChangeSuccess
//该事件会在调用 $location 的一些方法（例如path()方法）改变浏览器地址之后触发，
//但是当 监听$locationChangeStart事件 并调用preventDefault() 方法阻止了事件的传播后，该事件不被触发

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