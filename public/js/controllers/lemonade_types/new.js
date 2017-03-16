app.controller('LemonadeTypesNewController', ['$rootScope', '$scope', '$location', 'LemonadeType', function($rootScope, $scope, $location, LemonadeType) {

  $scope.colorOptions = LemonadeType.colorOptions;
 
  $scope.lemonadeType = {};

  $scope.create = function () {
    LemonadeType.create($scope.lemonadeType).then(function(response) {

      $rootScope.flash = { type: 'notice', message: "New lemonade type added!" };
      $location.url('/lemonade-types');

    }, function(response) {
      
      var messages = [];
      angular.forEach(response.data.errors, function(err) {
        messages.push(err.message);
      });

      $rootScope.flash = { type: 'alert', message: messages.join(', ') };

    });
  };

}]);