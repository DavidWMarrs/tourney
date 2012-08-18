module.exports = function(mongoose) {
	var Schema = mongoose.Schema;
	var schema = {};

	schema.user = new Schema({
	    email:  String,
	    username: String,
	    password: String
	});

	schema.team = new Schema({
	    name: String,
	    owner: Number
	});

	schema.event = new Schema({
	    name: String,
	    dateStarting: Date,
	    sport: String,
	    tags: String
	});

	return schemas;
};