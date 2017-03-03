var app = angular.module('firstApp', []);

app.controller('firstCtrl', ['$scope',
    function ($scope) {

        $scope.text = 'hello world';
        $scope.add = function(a, b) {
            return a + b ;
        }
    }]);