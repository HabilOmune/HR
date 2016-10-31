


angular.module('main.controller', []) 

.controller('indexCtrl', function ($scope, $state,$mdSidenav) {
    
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };

    console.log("warms");

})