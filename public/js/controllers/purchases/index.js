app.controller('PurchasesIndexController', ['$rootScope', '$scope', 'Purchase', function($rootScope, $scope, Purchase) {
 
  $scope.purchases = [];

  var loadPurchases = function() {
    Purchase.getAll().then(function(response) {
      $scope.purchases = response.data;
      setTotalSales();
    });
  };

  var setTotalSales = function() {
    $scope.total = 0;

    angular.forEach($scope.purchases, function(purchase) {
      $scope.total += purchase.quantity * purchase.LemonadeType.price;
    });
  };

  $scope.delete = function(id) {
    if(confirm("Are you sure you want to delete this purchase?")) {

      Purchase.delete(id).then(function() {
        $rootScope.flash = { type: 'notice', message: "Purchase was deleted." };
        loadPurchases();
      });

    }
  };

  loadPurchases();

}]);