module.exports = function(app, routes, controllers) {
	var allowedMethods = {
		post: ['post'],
		get: ['get'],
		both: ['get', 'post']
	}

  for (i in routes) {
    var route = routes[i];
    var methods = allowedMethods[route.method];
    for (j in methods) {
    	app[methods[j]](route.route, controllers[route.controller][route.action]);
    }
  }
};