'use strict';

var app = angular.module('dem015',[]);

app.directive('pane',function(){
  return {
    transclude:true,
    scope :{title:'@'},
    template: '<div style="border: 1px solid red;"> '+
    '<ng-transclude></ng-transclude>'+
    '</div>'
  };
});
