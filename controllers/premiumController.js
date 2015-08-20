var express = require('express'),
    router = express.Router(),
    ArticleRepo = require('../db/db').article,
    auth = require('../middleware/oauthconfig');

router.get('/articles/:id', auth.authorise(), function (req, res) {
    
    // TODO: validate that is it a valid id before executing
    ArticleRepo.findArticleById(req.params.id).then(function (article) {
 
            res.json(article);
        });
});

module.exports = router;