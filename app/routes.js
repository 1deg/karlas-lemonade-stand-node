var models        = require('../models');
var Sequelize     = require('sequelize');

module.exports = function(app) {

  // Purchase routes

  app.get('/api/purchases', function(req, res) {
    models.Purchase.findAll({ include: [{ model: models.LemonadeType }] }).then(function(purchases) {
      res.json(purchases);
    });
  });

  app.post('/api/purchases', function(req, res) {
    models.Purchase.create(req.body).then(function() {
      res.sendStatus(200);
    }, function(errors) {
      res.status(422).json(errors);
    });
  });

  app.put('/api/purchases/:id', function(req, res) {
    models.Purchase.findById(req.params.id).update(req.body).then(function() {
      res.sendStatus(200);
    }, function(errors) {
      res.status(422).json(errors);
    });
  });

  app.delete('/api/purchases/:id', function(req, res) {
    models.Purchase.findById(req.params.id).then(function(purchase) {
      return purchase.destroy();
    }, function() {
      res.sendStatus(404);
    }).then(function() {
      res.sendStatus(200);
    }, function() {
      res.sendStatus(400);
    });
  });


  // LemonadeType routes

  app.get('/api/lemonade-types', function(req, res) {
    models.LemonadeType.findAll().then(function(lemonadeTypes) {
      res.json(lemonadeTypes);
    });
  });

  app.post('/api/lemonade-types', function(req, res) {
    models.LemonadeType.create(req.body).then(function() {
      res.sendStatus(200);
    }, function(errors) {
      res.status(422).json(errors);
    });
  });

  app.delete('/api/lemonade-types/:id', function(req, res) {
    models.LemonadeType.findById(req.params.id).then(function(lemonadeType) {
      return lemonadeType.destroy();
    }, function() {
      res.sendStatus(404);
    }).then(function() {
      res.sendStatus(200);
    }, function() {
      res.sendStatus(400);
    });
  });


  // Angular route

  app.get('*', function(req, res) {
    res.sendFile('./public/index.html', { "root": __dirname + '/../' });
  });

};
