'use strict';

var app = angular.module('demo27',[]);
app.factory('dataCom', function () {
    return {
        a: 0
    }
});

app.controller('ctrlA', function ($scope, dataCom) {
    dataCom.a = 12;
});

app.controller('ctrlB', function ($scope, dataCom) {
    alert(dataCom.a);
});

