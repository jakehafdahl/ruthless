var mongoose = require('mongoose')
	
var UsersModel = mongoose.model('OAuthUsers');

var model = module.exports;

model.registerUserRegistrationApi = function(app){
	app.post('/register', function(req,res){
        
        var newUser = new UsersModel(req.body);
        
        newUser.save(function (err) {
            if (err) console.log('Error saving!');
            // thats it!
          });
        
        console.log(req.body);
	});
}