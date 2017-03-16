app.controller('PurchasesNewController', ['$rootScope', '$scope', '$location', 'LemonadeType', 'Purchase', function($rootScope, $scope, $location, LemonadeType, Purchase) {
 
  $scope.purchase = {};

  LemonadeType.getAll().then(function(response) {
    $scope.lemonadeTypes = response.data;
  });

  $scope.create = function () {
    Purchase.create($scope.purchase).then(function(response) {

      $rootScope.flash = { type: 'notice', message: "New purchase recorded!" };
      $location.url('/');

    }, function(response) {
      
      var messages = [];
      angular.forEach(response.data.errors, function(err) {
        messages.push(err.message);
      });

      $rootScope.flash = { type: 'alert', message: messages.join(', ') };

    });
  };

}]);