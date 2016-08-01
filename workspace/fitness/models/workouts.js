var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Workouts = new Schema({
	id: Schema.ObjectId,
	name: String,
	exercises: [{type: Schema.ObjectId, ref: "Exercises"}],
	muscleGroup: String,

})

module.exports = mongoose.model('Workouts', Workouts);