'use strict';

var app = angular.module('dem015', []);

app.directive('pane', function () {
    return {
        transclude: true,
        scope: {title: '@'},
        template: '<div style="border: 1px solid red;"> ' +
        '<ng-transclude></ng-transclude>' +
        '</div>'
    };
});

app.controller("myCtrl", [function () {
    var vm = this;
    vm.sayHi = function (name) {
        return ("Hey there, " + name);
    }
}]);

app.directive("myDir", [function () {
    return {
        scope: {
            attr1: "=",     //  双向绑定
            attr2: "@",     //  单向绑定
            attr3: "&"      //  事件绑定
        },
        link: function (scope) {
            console.log(scope.attr1);   // =, logs "Hey there, Juan"
            console.log(scope.attr2);   // @, logs "VM.sayHi('Juan')"
            console.log(scope.attr3);   // &, logs "function (a){return h(c,a)}"
            console.log(scope.attr3()); // &, logs "Hey there, Juan"
        }
    }
}]);

/*
①、false（默认值）：直接使用父scope。
 不会有自己的作用域，即是直接使用父级的scope里的值
②、true：继承父scope
 创建自己的作用域，同时继承父级scope里的值，即等同于从父级拿到初始值，修改它，不会改变父级scope里的值。
 (和ng-controller的不太一样，后面有提到)
③、对象{ }：创建一个新的“隔离”scope，但仍可与父scope通信。
完全独立的作用域（$rootScope都拿不到），通过三种模式 = & @同父级scope交互。

隔离的scope，通常用于创建可复用的指令，也就是它不用管父scope中的model。
然而虽然说是“隔离”，但通常我们还是需要让这个子scope跟父scope中的变量进行绑定。
绑定的策略有3种：@、=、&。

*/
