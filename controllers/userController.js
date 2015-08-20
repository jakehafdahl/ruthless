var express = require('express'),
    router = express.Router(),
    UserRepo = require('../db/db').user,
    auth = require('../middleware/oauthconfig');

var model = module.exports;

router.post('/register', function (req, res) {
    UserRepo.saveUser(req.body);
});
router.get('/', auth.authorise(), function (req, res) {
    UserRepo.findUserById(req.user.id).then(function (user) {
        res.json(user);
    });
});

module.exports = router;