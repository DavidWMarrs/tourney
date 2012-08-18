module.exports = function(mongoose) {
	var Schema = mongoose.Schema;
	var schemas = {};

	schemas.user = new Schema({
	    email:  String,
	    username: String,
	    password: String
	});

	schemas.team = new Schema({
	    name: String,
	    owner: Number
	});

	schemas.event = new Schema({
	    name: String,
	    dateStarting: Date,
	    sport: String,
	    tags: String
	});

	return schemas;
};