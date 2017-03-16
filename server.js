var env             = process.env.NODE_ENV || 'development';
var config          = require('./config/config.json')[env];

var http            = require('http');
var express         = require('express');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var Sequelize       = require('sequelize');
var debug           = require('debug')('express-sequelize');
var Umzug           = require('umzug');
var models          = require('./models');

var port            = process.env.PORT || 3000;

var app             = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.set('port', port);

var server = http.createServer(app);

models.sequelize.sync().then(function() {
  
  server.listen(port, function() {
    debug('Express server listening on port ' + server.address().port);
  });

});

exports = module.exports = app;
