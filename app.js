(function() {
  var app, express, routes, stylus;

  express = require('express');

  routes = require('./routes');

  stylus = require('stylus');

  app = module.exports = express.createServer();

  app.configure(function() {
    app.set('views', "" + __dirname + "/views");
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(stylus.middleware({
      src: "" + __dirname + "/public",
      dest: "" + __dirname + "/public",
      compress: true,
      debug: false
    }));
    return app.use(express.static("" + __dirname + "/public"));
  });

  app.configure('development', function() {
    return app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });

  app.configure('production', function() {
    return app.use(express.errorHandler());
  });

  app.get('/', routes.login);

  app.get('/login', routes.login);

  app.get('/portal', routes.portal);

  app.listen(3000);

  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

}).call(this);
