var express = require('express'),
    router = express.Router(),
    ProjectionsRepo = require('../db/db').projections;

router.get('/default', function (req, res) {
	ProjectionsRepo.getDefault().then(function (projection) {
		res.json(projection);
	});
});

router.get('/:id', function (req, res) {
	// validate that is it a valid id before executing
	ProjectionsRepo.getProjectionById(req.params.id).then(function (projection) {
		res.json(projection);
	});
});

module.exports = router;