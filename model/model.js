var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  model = module.exports;

// 
// Schemas definitions
//
var OAuthAccessTokensSchema = new Schema({
  accessToken: { type: String },
  clientId: { type: String },
  userId: { type: String },
  expires: { type: Date }
});

var OAuthRefreshTokensSchema = new Schema({
  refreshToken: { type: String },
  clientId: { type: String },
  userId: { type: String },
  expires: { type: Date }
});

var OAuthClientsSchema = new Schema({
  clientId: { type: String },
  clientSecret: { type: String },
  redirectUri: { type: String }
});

var OAuthUsersSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, default: '' }
});


var ArticleSchema = new Schema({
    title: String,
    author: String,
    summary: String,
    ispremium: Boolean,
    content: String,
    views: { type: Number, default: 0 },
    created: { type: Date, default: Date.now }
});


var PlayerSchema = new Schema({
	name: String,
	position: String,
	team: String,
	passcompletions: Number,
	passattempts: Number,
	passyards: Number,
	passtd: Number,
	interceptionsthrown: Number,
	rushattempts: Number,
	rushyards: Number,
	rushtd: Number,
	receptions: Number,
	receptionyards: Number,
	receptiontd: Number,
	xpmade: Number,
	fgattempts: Number,
	fgmade: Number,
	over30: Number,
	over40: Number,
	over50: Number,
	ptsAllowed: Number,
	yardsAllowed: Number,
	sacks: Number,
	interceptions: Number,
	fumblesRecovered: Number,
	touchdowns: Number
});

var ProjectionSchema = new Schema({
    name: String,
	ispublic: Boolean,
	players: [PlayerSchema],
    created: { type: Date, default: Date.now }
});

mongoose.model('projections', ProjectionSchema);
mongoose.model('articles', ArticleSchema);
mongoose.model('OAuthAccessTokens', OAuthAccessTokensSchema);
mongoose.model('OAuthRefreshTokens', OAuthRefreshTokensSchema);
mongoose.model('OAuthClients', OAuthClientsSchema);
mongoose.model('OAuthUsers', OAuthUsersSchema);