app.controller('LemonadeTypesIndexController', ['$rootScope', '$scope', 'LemonadeType', function($rootScope, $scope, LemonadeType) {

  $scope.lemonadeTypes = [];

  var loadLemonadeTypes = function () {
    LemonadeType.getAll().then(function(response) {
      $scope.lemonadeTypes = response.data;
    });
  };

  $scope.delete = function(id) {
    if(confirm("Are you sure you want to delete this lemonade type?")) {

      LemonadeType.delete(id).then(function() {
        $rootScope.flash = { type: 'notice', message: "Lemonade type deleted." };
        loadLemonadeTypes();
      });

    }
  };

  loadLemonadeTypes();

}]);