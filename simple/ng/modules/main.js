define(['jquery','angular','dateFormat'],function(require, exports, module){
  //  require('dateFormat');
    var pageConfig = require('testModule');
 //   pageConfig.say("sdfa");
    var module = angular.module("myApp",[]);
    module.factory('myFactory',['$window',function($window){
        var service = {
            myname : 'jialong',
            getName : function(){
                return this.myname;
            },
            setName : function (){
            this.myname = name;
            }
        };
        $window.alert('myFactory');
        return service;
    }]);
    module.service('myService',function(){
        this.myname =  'jialongdd';
        this.getName = function(){
            return this.myname;
        };
        this.setName = function (){
            this.myname = name;
        }
        alert('myService');
    });
    module.config(function(){
        alert("fas");
    });
    module.controller('MyController',function($scope,$http,myService){
        $scope.clock = {
            now: new Date()
        };
        $scope.counter = 0;
        $scope.add = function(amount) { $scope.counter += 1; };
        $scope.subtract = function(amount) { $scope.counter -= amount; };

        var updateClock = function() {
            $scope.clock.now = new Date();
        };
        setInterval(function() {
            $scope.$apply(updateClock);
        }, 1000);
        updateClock();
        $scope.myname = myService.getName();
        $http.get("/practice/simple/ng/names.json",{params:{param:1}})
        .success(function(response) {$scope.names = response;});
    });
    module.directive('myD1',function(){
        return {
            restrict: 'AE',
            transclude: true,
            replace: false,
            template:'<h1><input ng-model="counter"><span ng-model="counter"></span><button ng-click="add()">test</button></h1>'
        }
    }).directive('myD2',function(){
        return {
            restrict: 'AE',
            transclude: true,
            template:'<h1>hello sdsafdasfsdf!!</h1>'
        }
    });

});