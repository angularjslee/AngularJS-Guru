'use strict';

var sampleApp = angular.module('demo24',[]);
//智能社
//组件间依赖
angular.module('mod1',[]).controller('cont1', function ($scope) {
    $scope.a = 12;
}).filter('myFilter', function () {
    return function (input) {
        return input+20
    }
});
angular.module('mod2',[]).controller('cont2', function ($scope) {
    $scope.b = 5;
});
angular.module('mod3', ['mod1', 'mod2']);

