app.factory('LemonadeType', ['$http', function($http) {

  return {
    getAll: function() {
      return $http.get('/api/lemonade-types');
    },

    get: function(id) {
      return $http.get('/api/lemonade-types/' + id);
    },

    create: function(lemonadeType) {
      return $http.post('/api/lemonade-types', lemonadeType);
    },

    update: function(lemonadeType) {
      return $http.put('/api/lemonade-types/' + lemonadeType.id, lemonadeType);
    },

    delete: function(id) {
      return $http.delete('/api/lemonade-types/' + id);
    },

    colorOptions: [
      'yellow',
      'pink',
      'green'
    ]
  };

}]);
