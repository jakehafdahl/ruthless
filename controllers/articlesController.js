var express = require('express'),
    router = express.Router(),
    ArticleRepo = require('../db/db').article;

router.get('/', function (req, res) {
    ArticleRepo.getArticleList().then(function(article){
        res.json(article);
    });
});

router.get('/:id', function (req, res) {

    if (req.params.id === 'frontpage') {
        ArticleRepo.getFrontPage().then(function (articles) {

                var frontPageObject = {
                    featured: articles.shift(),
                    articles: articles
                };

                res.json(frontPageObject);
            });
    } else {
    
        // TODO: validate that is it a valid id before executing
        ArticleRepo.getArticleById(req.params.id).then(function (article) {
 
            if (article.ispremium) {
                article.content = article.content.substring(0, 500) + '</br><h1>This is Premium Content, Log in the view the rest!</h1>';
            }
            res.json(article);
        });
    }
});

module.exports = router;