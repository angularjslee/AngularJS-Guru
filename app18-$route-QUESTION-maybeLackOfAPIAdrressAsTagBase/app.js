'use strict';

angular.module('ngRouteExample', ['ngRoute'])

    .controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

    .controller('BookController', function($scope, $routeParams) {
        $scope.name = 'BookController';
        $scope.params = $routeParams;
    })

    .controller('ChapterController', function($scope, $routeParams) {
        $scope.name = 'ChapterController';
        $scope.params = $routeParams;
    })

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Book/:bookId', {
                templateUrl: 'book.html',
                controller: 'BookController',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'chapter.html',
                controller: 'ChapterController'
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });


//$routeChangeStart
//开始改变路由时触发，传递到 $rootScope
//$routeChangeSuccess
//路由改变时触发， ng-view 进行监听，接收到该事件时会实例化相应的控制器并渲染视图
//$routeChangeError
//路由切换异常时触发，传递到 $rootScope
