exports.index = function (req, res) {
    res.render('tournaments/index', {});
}

exports.get = function (req, res) {
    var tournament = {name: 'Chess'};
    res.render('tournaments/view', { tournament: tournament });
};

exports.create = function (req, res) {
    res.render('tournaments/create', {});
};