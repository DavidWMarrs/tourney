exports.index = function (req, res) {
    res.render('users/index', {});
}

exports.get = function (req, res) {
    var user = {name: 'Joe'};
    res.render('users/view', { user: user });
};

exports.create = function (req, res) {

};