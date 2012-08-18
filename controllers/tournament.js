module.exports = function (models) {
    var context = {};

	context.index = function (req, res) {
	    models.tournament.find(function (err, tournaments) {
		  res.render('tournaments/index', {tournaments:tournaments});
		});
	}

	context.get = function (req, res) {
		models.tournament.findOne({_id: req.params.id}, function(err, tournament) {
            if (err) {
                console.log(err);
                throw err;
            }
			res.render('tournaments/view', { tournament: tournament });
		})
	};

	context.create = function (req, res) {
		if (req.route.method === 'post') {
			req.body.start_date = new Date(req.body.start_date);
			
			req.body.end_date = new Date(req.body.end_date);
			var tournament = new models.tournament(req.body);
			tournament.save(function (err, tournament) {
			if (err) {
					//don't really care at the moment
					console.log(err);
					throw err;
				};
			})
		} else {
			res.render('tournaments/create', {});
		}
	};
	
	return context;
}