var userSchema = new Schema({
    email:  String,
    username: String,
    password: String
});

var teamSchema = new Schema({
    name: String,
    owner: Number
});

var eventSchema = new Schema({
    name: String,
    dateStarting: Date,
    sport: String,
    tags: String
});
