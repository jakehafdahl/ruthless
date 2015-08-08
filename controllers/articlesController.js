var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');


var Schema = mongoose.Schema;
var articleSchema = new Schema({
    title: String,
    author: String,
    summary: String,
    ispremium: Boolean,
    content: String,
    views: { type: Number, default: 0 },
    created: { type: Date, default: Date.now }
});

var ArticlesModel = mongoose.model('articles', articleSchema);

// look at this for RESTful route setup using express Router
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

router.get('/', function (req, res) {
    ArticlesModel.find({}, 'title author summary ispremium', function (err, article) {
        if (err) return console.error(err);

        res.json(article);
    });

});
router.get('/:id', function (req, res) {

    if (req.params.id === 'frontpage') {
        ArticlesModel.find({}, 'title author summary')
            .sort('created views')
            .exec(function (err, articles) {
                if (err) return console.error(err);

                var frontPageObject = {
                    featured: articles.shift(),
                    articles: articles
                };

                res.json(frontPageObject);
            });
    } else {
    
        // validate that is it a valid id before executing
        ArticlesModel.findOneAndUpdate({ _id: req.params.id }, { $inc: { views: 1 } }).exec(function (err, article) {
            if (err) return console.error(err);
            //TODO: check if this is premium content and obscure for non-premium users  
            if (article.ispremium) {
                article.content = article.content.substring(0, 500) + '</br><h1>This is Premium Content, Log in the view the rest!</h1>';
            }
            res.json(article);
        });
    }
});

module.exports = router;