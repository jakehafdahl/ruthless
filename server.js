var express   = require('express'); // Require Express module
var app = express();
var http = require('http').Server(app); // Http server
var bodyParser = require("body-parser"); // Require Body parser module
var mongoose = require('mongoose'); // Require Mongoose for MongoDB access
var less_middleware = require('less-middleware'); //LESS support for express
var auth = require('./middleware/oauthconfig');

var articleController = require('./controllers/articlesController');
var userController = require('./controllers/userController');
var projectionController = require('./controllers/projectionController');
var premiumController = require('./controllers/premiumController');

app.use(less_middleware( __dirname + '/static'));
app.use(express.static( __dirname + '/static'));
app.use('/fonts',express.static( __dirname + '/static/bower_components/bootstrap/fonts'));

var uristring = 'mongodb://ruthless:ruthless@ds031902.mongolab.com:31902/professor-stats';

app.set('port', (process.env.PORT || 8080));

// Makes connection asynchronously. Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // Body parser use JSON data
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*'); // We can access from anywhere
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});
  
app.all('/login', auth.grant());

//app.get('/secret', app.oauth.authorise(), function (req, res) {
//  res.send('Secret area');
//});

app.use(auth.errorHandler());

http.listen(app.get('port'),function(){
	console.log("Connected and listening to port " + app.get('port'));
});

app.use('/user', userController);
app.use('/articles', articleController);
app.use('/projections', projectionController);
app.use('/premium', premiumController);