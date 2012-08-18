
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , modelGenerator = require('./util/model_generator.js')
  , schema = require('./config/schema.js')(mongoose)
  , config = require('./config/config.js')
  , util = require('./util/util.js');

var connection = mongoose.createConnection(config.database);
var models = modelGenerator(connection, schema);
var routes = {
    index: require('./routes')
    , user: require('./routes/user.js')(models)
    , tournament: require('./routes/tournament.js')
};

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

app.get('/', routes.index.index);
app.get('/user', routes.user.index);
app.get('/user/view/:id', routes.user.get);
app.get('/user/create', routes.user.create);
app.post('/user/create', routes.user.create);
app.get('/tournament', routes.tournament.index);
app.get('/tournament/:id', routes.tournament.get);
app.post('/tournament', routes.tournament.create);

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
