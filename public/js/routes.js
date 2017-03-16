app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'views/purchases/index.html',
      controller: 'PurchasesIndexController'
    })

    .when('/purchases/new', {
      templateUrl: 'views/purchases/new.html',
      controller: 'PurchasesNewController'
    })

    .when('/lemonade-types', {
      templateUrl: 'views/lemonade_types/index.html',
      controller: 'LemonadeTypesIndexController'
    })

    .when('/lemonade-types/new', {
      templateUrl: 'views/lemonade_types/new.html',
      controller: 'LemonadeTypesNewController'
    })

    .when('/lemonade-types/:id/edit', {
      templateUrl: 'views/lemonade_types/edit.html',
      controller: 'LemonadeTypesNewController'
    })
    ;

  $locationProvider.html5Mode(true);

}]);