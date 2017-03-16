app.factory('Purchase', ['$http', function($http) {

  return {
    getAll: function() {
      return $http.get('/api/purchases');
    },

    get: function(id) {
      return $http.get('/api/purchases/' + id);
    },

    create: function(purchase) {
      return $http.post('/api/purchases', purchase);
    },

    update: function(purchase) {
      return $http.put('/api/purchases/' + purchase.id, purchase);
    },

    delete: function(id) {
      return $http.delete('/api/purchases/' + id);
    }
  };

}]);
