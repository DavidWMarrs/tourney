module.exports = function (models) {
    var context = {};

    context.index = function (req, res) {
        res.render('teams/index', {});
    }

    context.get = function (req, res) {
        models.team.findOne({name: req.params.id}, function(err, team) {
            if (err) {
                console.log(err);
                throw err;
            }
            res.render('teams/view', { team: team });
        });
    };

    context.create = function (req, res) {
        if (req.route.method === 'post') {
            var user = new models.team(req.body);
            user.save(function (err, team) {
                if (err) {
                    //don't really care at the moment
                    console.log(err);
                    throw err;
                };
            })
        } else {
            res.render('teams/create', {});
        }
    };

    return context;
};