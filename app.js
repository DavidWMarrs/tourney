
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , modelGenerator = require('./util/model_generator.js')
  , router = require('./util/router.js')
  , schema = require('./config/schema.js')(mongoose)
  , config = require('./config/config.js')
  , routes = require('./config/routes.js')
  , util = require('./util/util.js')
  , less = require('connect-lesscss');

var connection = mongoose.createConnection(config.database);
var models = modelGenerator(connection, schema);
var controllers = {
    index: require('./controllers')
    , user: require('./controllers/user.js')(models)
    , tournament: require('./controllers/tournament.js')
    , team: require('./controllers/team.js')(models)
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
  app.use("/css/styles.css", less("public/less/styles.less", {paths: ["public/less"]}));
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

router(app, routes, controllers);

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
