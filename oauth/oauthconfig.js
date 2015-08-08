var oauthserver = require('oauth2-server'),	
  oauthmodels = require('../model/model'),
  model = module.exports;
  
  model.oauth = oauthserver({
    model: oauthmodels,
    grants: ['password'],
    debug: true,
    accessTokenLifetime: 2629740 // ~ 1 month
});