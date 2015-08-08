var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    oauthserver = require('../oauth/oauthconfig');

var ArticlesModel = mongoose.model('articles');

// look at this for RESTful route setup using express Router
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

router.get('/articles/:id', oauthserver.oauth.authorise(), function (req, res) {
    // validate that is it a valid id before executing
    ArticlesModel.findOneAndUpdate({ _id: req.params.id }, { $inc: { views: 1 } }).exec(function (err, article) {
        if (err) return console.error(err);
        res.json(article);
    });
});

module.exports = router;