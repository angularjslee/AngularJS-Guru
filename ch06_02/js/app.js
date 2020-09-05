var routeModule = angular.module('routeModule', ['ngRoute']);

routeModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
          when('/showOrder/:orderId', {
            templateUrl: 'templates/order-details.html',
            controller: 'ShowOrderController'
          })
  }]);

//为了获取URL参数， 在控制器中 注入 $routeParams 服务
routeModule.controller("ShowOrderController",function($scope, $routeParams){
    $scope.order_id = $routeParams.orderId;
});