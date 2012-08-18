module.exports = [
  {route: '/', controller: 'index', action: 'index', method: 'get'},
  {route: '/user', controller: 'user', action: 'index', method: 'get'},
  {route: '/user/view/:id', controller: 'user', action: 'get', method: 'get'},
  {route: '/user/create', controller: 'user', action: 'create', method: 'both'},
  {route: '/team', controller: 'team', action: 'index', method: 'get'},
  {route: '/team/view/:id', controller: 'team', action: 'index', method: 'get'},
  {route: '/team/create', controller: 'team', action: 'create', method: 'both'},
  {route: '/tournament', controller: 'tournament', action: 'index', method: 'get'},
  {route: '/tournament/:id', controller: 'tournament', action: 'get', method: 'get'},
  {route: '/tournament', controller: 'tournament', action: 'create', method: 'post'}
];