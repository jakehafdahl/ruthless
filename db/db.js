var models = require('../model/model'),
	mongoose = require('mongoose');

var uristring = 'mongodb://ruthless:ruthless@ds031902.mongolab.com:31902/professor-stats';
// Makes connection asynchronously. Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

var ArticlesModel = mongoose.model('articles');
var ProjectionsModel = mongoose.model('projections');
var UsersModel = mongoose.model('OAuthUsers');

var model = module.exports;

var articleFunctions = {};
var projectionFunctions = {};
var userFunctions = {};

articleFunctions.getArticleList = function(){
	return ArticlesModel.find({}, 'title author summary ispremium').exec();
};

articleFunctions.getFrontPage = function(){
	return ArticlesModel.find({}, 'title author summary')
            .sort('created views')
            .exec();
};

articleFunctions.findArticleById = function(id){
	return ArticlesModel.findOneAndUpdate({ _id: id }, { $inc: { views: 1 } }).exec();
};

projectionFunctions.getDefault = function(){
	return ProjectionsModel.findOne({ ispublic: true, name: "Default" }).exec();
};

projectionFunctions.getProjectionById = function(id){
  return ProjectionsModel.findOneAndUpdate({ _id: id }, { $inc: { views: 1 } }).exec();
};

userFunctions.saveUser = function(user){
	
	var newUser = new UsersModel(user);

    newUser.save(function (err) {
        if (err) console.log('Error saving!');
    });
};

userFunctions.findUserById = function(id){
	UsersModel.findById(id, 'username _id email').exec();
};

model.article = articleFunctions;
model.projections = projectionFunctions;
model.user = userFunctions;