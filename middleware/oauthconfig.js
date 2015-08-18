var oauthserver = require('oauth2-server'),	
  oauthmodels = require('../model/model'),
  model = module.exports;
  
  model.grant = function(){
    return oauth.grant();
  };
  
  model.errorHandler = function(){
    return oauth.errorHandler();
  };
  
  model.authorise = function(){
    return oauth.authorise();
  };
  
  var oauth = oauthserver({
    model: oauthmodels,
    grants: ['password'],
    debug: true,
    accessTokenLifetime: 2629740 // ~ 1 month
});