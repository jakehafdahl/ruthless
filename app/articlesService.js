var mongoose = require('mongoose');

var model = module.exports;	

var Schema = mongoose.Schema;
var articleSchema = new Schema({
    title: String,     
    author: String,
    summary: String,
    content: String
});

var ArticlesModel = mongoose.model('articles', articleSchema);

// look at this for RESTful route setup using express Router
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

model.registerArticlesApi = function(app){
	app.get('/articles',function(req,res){
	    ArticlesModel.find({},'title author summary',function(err, article) {
          if (err) return console.error(err);
          
	      res.json(article);
        });
        
	})
    .get('/article/:id', function(req,res){
      // validate that is it a valid id before executing
	    ArticlesModel.findById( req.params.id,function(err, article) {
          if (err) return console.error(err);
		      //TODO: check if this is premium content and obscure for non-premium users  
	      res.json(article);
        });
        
	});
}