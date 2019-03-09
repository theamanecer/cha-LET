var app = angular.module('myapp', []);
app.controller('empcont', function ($scope) {
    $scope.myvar = 'Hello';

    $scope.myfunc = function () {
                    alert('method call');
    };
    $scope.myfunc2 = function (val, val2, val3) {
        alert('welcome' + val + val2 + val3);
        $scope.myval = val;
        $scope.myval2 = val2;
        $scope.myval3 = val3;
    };
    });