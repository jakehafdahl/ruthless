var express   = require('express'); // Require Express module
var app = express();
var http = require('http').Server(app); // Http server
var bodyParser = require("body-parser"); // Require Body parser module
var mongoose = require('mongoose'); // Require Mongoose for MongoDB access

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // Body parser use JSON data
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*'); // We can access from anywhere
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
app.get('/', function(req, res){
    res.sendfile('index.html' );
});

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    first: String,
    last: String,
    middle: String
  }
});

var User = mongoose.model('User', userSchema);

var instance = new User();

instance.name = {
    first: "Jim",
    last:"Smith"
  };

http.listen(8080,function(){
	console.log("Connected and listening to port 8080");
});

app.get('/user',function(req,res){
    var data = {
        user: instance
    };
	
	res.json(data);
    
});