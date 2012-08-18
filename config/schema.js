module.exports = function(mongoose, passport, bcrypt) {
    var Schema = mongoose.Schema;
    var schema = {};

    schema.user = new Schema({
        email:  { type: String, required: true },
        username: { type: String, required: true },
        salt: { type: String, required: true },
        hash: { type: String, required: true },
        teams: [{type: Schema.ObjectId, ref: 'team'}]
    });

    schema.team = new Schema({
        name: String,
        sport: String,
        owner: String,
        location: String,
        tournaments: [{type: Schema.ObjectId, ref: 'tournament'}]
    });

    schema.tournament = new Schema({
        name: String,
        start_date: Date/*String*/,
        end_date: Date/*String*/,
        sport: String,
        tags: String,
        users: [{type: Schema.ObjectId, ref: 'users'}]
    });

    schema.user.virtual('password')
        .get(function () { return this._password; })
        .set(function (password) {
            this._password = password;
            this.salt = bcrypt.genSaltSync(37);
            this.hash = bcrypt.hashSync(password, this.salt);
        });

    schema.user.method('verifyPassword', function(password, callback) {
      bcrypt.compare(password, this.hash, callback);
    });

    schema.user.static('authenticate', function(email, password, callback) {
      this.findOne({ email: email }, function(err, user) {
          if (err) { return callback(err); }
          if (!user) { return callback(null, false); }
          user.verifyPassword(password, function(err, passwordCorrect) {
            if (err) { return callback(err); }
            if (!passwordCorrect) { return callback(null, false); }
            return callback(null, user);
          });
        });
    });

    return schema;
};