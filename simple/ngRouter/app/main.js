/**
 * Created by work on 2015/8/26.
 */
angular.module('mainApp',['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("PageTab.Page3", {
            url: "/Page3",
            templateUrl: "Page3.html",
            controller: function($rootScope,$scope,$http){
                if(!$scope.name){
                    $http.get("/practice/simple/ng/names.json",{params:{param:1}})
                        .success(function(response) {$scope.name = response[0].Name;});
                }

            }
        });
});
angular.module('testApp',['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("PageTab.Page2", {
            url: "/Page2",
            templateUrl: "Page2.html"
        })
});
var routerApp = angular.module('routerApp', ['mainApp','testApp']);
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('PageTab');

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {
            url: "/Page1",
            templateUrl: "Page1.html"
        })
        .state('Page4',{
            url: "/Page4",
            templateUrl: "Page4.html"
        })
});
routerApp.controller('thisCtrl',function($rootScope,$scope){
    var values = [1,2,4];
    var log = [];
    $scope.test = 'test';
    $rootScope.test2 = 'test2';
    angular.forEach(values, function(value, key) {
        this.push(key + ': ' + value);
    }, log);
}).controller('thisCtrl2',function($rootScope,$scope){
    $scope.mainApp = "mainApp";
    $rootScope.test3 = 'test2';
});