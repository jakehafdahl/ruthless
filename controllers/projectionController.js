var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');


var Schema = mongoose.Schema;

var playerSchema = new Schema({
	name: String,
	position: String,
	team: String,
	passcompletions: Number,
	passattempts: Number,
	passyards: Number,
	passtd: Number,
	interceptionsthrown: Number,
	rushattempts: Number,
	rushyards: Number,
	rushtd: Number,
	receptions: Number,
	receptionyards: Number,
	receptiontd: Number
});

var projectionSchema = new Schema({
    name: String,
	ispublic: Boolean,
	players: [playerSchema],
    created: { type: Date, default: Date.now }
});

var ProjectionsModel = mongoose.model('projections', projectionSchema);

router.get('/', function (req, res) {
	ProjectionsModel.findOne({ ispublic: true, name: "Default" }, function (err, projection) {
		if (err) return console.error(err);

		res.json(projection);
	});

});
router.get('/:id', function (req, res) {
	// validate that is it a valid id before executing
	ProjectionsModel.findOneAndUpdate({ _id: req.params.id }, { $inc: { views: 1 } }).exec(function (err, article) {
		if (err) return console.error(err);
		      //TODO: check if this is premium content and obscure for non-premium users  
		if (article.ispremium) {
			article.content = article.content.substring(0, 500) + '</br><h1>This is Premium Content, Log in the view the rest!</h1>';
		}
		res.json(article);
	});
});

module.exports = router;