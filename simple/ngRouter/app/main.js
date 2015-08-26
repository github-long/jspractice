/**
 * Created by work on 2015/8/26.
 */
angular.module('mainApp',['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("PageTab.Page3", {
            url: "/Page3",
            templateUrl: "Page3.html",
            controller: function($scope){
                $scope.name="jialong";
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
    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {
            url: "/Page1",
            templateUrl: "Page1.html"
        })
});
routerApp.controller('thisCtrl',function($scope){
    var values = [1,2,4];
    var log = [];
    angular.forEach(values, function(value, key) {
        this.push(key + ': ' + value);
    }, log);
});