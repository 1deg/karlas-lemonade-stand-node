app.controller('AppController', ['$rootScope', '$scope', '$timeout', function($rootScope, $scope, $timeout) {

  $scope.$watch('flash', function() {
    if ($rootScope.flash) {
      
      $scope.shownFlash = $rootScope.flash;

      $timeout.cancel($scope.flashTimeout);

      $scope.flashTimeout = $timeout(function() {
        delete $scope.shownFlash;
      }, 5000);
    
    }
  });

}]);