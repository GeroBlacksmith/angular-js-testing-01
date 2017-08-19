'use strict';
//se le puede dar un nombre `var nombreModulo = angular.module('myApp.view3', ['ngRoute'])`
angular.module('myApp.view3', ['ngRoute'])
//luego llamas `nombreModulo.config(...)`
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/view3',{
        templateUrl:'view3/view3.html',
        controller:'View3Ctrl'
    })
}])
//luego llamas `nombreModulo.controller(...)`
.controller('View3Ctrl',function View3Ctrl($scope){
    $scope.valores=[
        {
            nombre:"Gerardo",
            apellido:"Herrera"
        },
        {
            nombre:"Maria Jose",
            apellido:"Garcia Navarro"
        }
    ]
});