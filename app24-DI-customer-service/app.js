'use strict';

var app = angular.module('demo24', []);
//Service 类似 JS 里的 new
app.service('testSer', fun ction () {
   this.a = 12;
});

app.controller('cont1', function ($scope, testSer) {
   alert(testSer);
});


