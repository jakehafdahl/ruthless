var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    auth = require('../middleware/oauthconfig');

var UsersModel = mongoose.model('OAuthUsers');

var model = module.exports;

router.post('/register', function (req, res) {

    var newUser = new UsersModel(req.body);

    newUser.save(function (err) {
        if (err) console.log('Error saving!');
        // thats it!
    });

    console.log(req.body);
    })
router.get('/', auth.authorise(), function (req, res) {
        UsersModel.findById(req.user.id, 'username _id email', function (err, user) {
            if (err) return console.error(err);
            res.json(user);
        });
    });

module.exports = router;