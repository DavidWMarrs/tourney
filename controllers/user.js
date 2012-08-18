module.exports = function (models) {
    var context = {};

    context.index = function (req, res) {
        models.user.find(function (err, users) {
            res.render('users/index', {users: users});
        })
    }

    context.get = function (req, res) {
        models.user.findOne({_id: req.params.id}).populate('teams').exec(function(err, user) {
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
                console.log(user);
                res.redirect('/user/view/' + user._id);
            })
        } else {
            res.render('users/create', {});
        }
    };

    return context;
};