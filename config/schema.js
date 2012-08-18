module.exports = function(mongoose) {
	var Schema = mongoose.Schema;
	var schema = {};

	schema.user = new Schema({
	    email:  String,
	    username: String,
	    password: String,
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
	    dateStarting: Date,
	    sport: String,
	    tags: String
	});

	return schema;
};