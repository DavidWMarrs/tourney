module.exports = function(mongoose) {
	var Schema = mongoose.Schema;
	var schema = {};

	schema.user = new Schema({
	    email:  String,
	    username: String,
	    password: String
	});

	/*schema.team = new Schema({
	    name: String,
	    owner: Number
	});*/

	schema.tournament = new Schema({
	    name: String,
	    start_date: Date/*String*/,
		end_date: Date/*String*/,
	    sport: String,
	    tags: String
	});

    schema.team = new Schema({
        name: String,
        sport: String,
        owner: String,
        location: String
    });

	return schema;
};