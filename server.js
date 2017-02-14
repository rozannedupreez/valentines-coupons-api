'use strict';

//Initial variables
var config            = require('./config');
var express           = require('express');

//Global variables
global._              = require('lodash');
global.app            = new express();
global.logger         = require('winston');
global.db             = require('./db/db.connection');

var bodyParser        = require('body-parser');
var expressValidator  = require('./utilities/validators');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator);

var server = app.listen(config.port , function(){
  logger.info('Listening on port %d' , server.address().port);
});

// IMPORTANT - Declare route after initiate everything
var routes            = require('./routes');