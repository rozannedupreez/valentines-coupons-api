'use strict';

var _       = require('lodash');
var env     = process.env.NODE_ENV || 'production';

module.exports = _.extend(require('./env/common'), require('./env/' + env) || {} );
