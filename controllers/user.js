module.exports = function (models) {
    var context = {};

    context.index = function (req, res) {
        res.render('users/index', {});
    }

    context.get = function (req, res) {
        models.user.findOne({username: req.params.id}, function(err, user) {
            if (err) {
                console.log(err);
                throw err;
            }
            res.render('users/view', { user: user });
        });
    };

    context.create = function (req, res) {
        if (req.route.method === 'post') {
            var user = new models.user(req.body);
            user.save(function (err, user) {
                if (err) {
                    //don't really care at the moment
                    console.log(err);
                    throw err;
                };
            })
        } else {
            res.render('users/create', {});
        }
    };

    return context;
};