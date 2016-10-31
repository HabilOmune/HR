


angular.module('wall.controller', [])

.controller('wallCtrl', function ($rootScope, $scope, $state, $http, $mdSidenav, $mdDialog) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.showleaveform = function(ev){
    $mdDialog.show({
        controller: leaveCtrl,
        templateUrl: 'wall/leaveform.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  }

  function leaveCtrl($scope, $mdDialog) {
      $scope.sendRequest = function (frm) {
          console.log(frm);
      };

      $scope.hide = function () {
          $mdDialog.hide();
      };

      $scope.cancel = function () {
          $mdDialog.cancel();
      };

      $scope.answer = function (answer) {
          $mdDialog.hide(answer);
      };
  }
})
