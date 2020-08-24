'use strict';


var app = angular.module('test', []);
app.controller('demoTest', function ($scope, $http) {
    $scope.pName = "Guru99";

    $scope.replies = [];
    //获取，显示留言


    function getPage(p){
        alert(p);
        $http.get('weibo.php', {
            params: {act: 'get', page: p}
        }).success(function (arr) {
            $scope.replies = arr;
        }).error(function () {
            alert('Failed');
        });
    }
    getPage(1);
    $scope.getPage = getPage;


    // 提交留言
    $scope.submitMsg = function () {
        //alert("submit");
        $http.get('weibo.php', {
            params: {act: 'add', content: $scope.inputText}
        }).success(function (res) {
            //push 往后填
            //unshift 往前填
            $scope.replies.push({
                id: res.id,
                content: $scope.inputText,
                time: res.time,
                act: 0,
                ref: 0
            });
            if($scope.replies.length > 6){
                //若大于六条，删掉
                $scope.replies.pop();
            }
            $scope.inputText = '';
        }).error(function () {
            alert('submit failed')
        })
    };
    //页码
    //$scope.pages = [1,2,3];
    $scope.pages = [];
    $scope.curPages = 1;
    $http.get('weibo.php', {
        params: {act: 'get_page_content'}
    }).success(function (arr) {
        for (var i = 1; i<= json.count; i++){
            if (i==$scope.curPages){
                $scope.pages.push({
                    num: i,
                    className: 'active'
                })
            } else {
                $scope.pages.push({
                    num: i,
                    className: ''
                })
            }
        }
    }).error(function () {
        alert('Failed');
    });

    //顶和踩得函数
    $scope.fnAcc = function (id) {
        //调用接口
        //$http.get()
        $http.get('weibo.php', {
            params: {act: 'get', id: id}
        }).success(function (arr) {
            for(var i = 0; i<$scope.replies.length; i++){
                if($scope.replies[i].id = id){
                    $scope.replies[i].acc++;
                }
            }
        }).error(function () {
            alert('错误');
        });
        alert(id);
    };
    $scope.fnAcc = function (id) {

    };
});