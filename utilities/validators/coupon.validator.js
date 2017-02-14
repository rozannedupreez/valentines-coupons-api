'use strict';

var validationChecker   = require('./validation.checker');
var validationError     = require('./validation.error');

var add = function(req, res, next){
    //validationChecker.hasValidToken(req);
    console.log(req);
    validationChecker.areRequired(req, ['redeemed']);
    validationError.processErrors(req, res, next);
};


module.exports.add     = add;
