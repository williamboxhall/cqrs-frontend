var application = angular.module("application", []);

application.controller('PersonCtrl', function ($scope) {
    $scope.save = function () {
        alert('foo');
    };
});