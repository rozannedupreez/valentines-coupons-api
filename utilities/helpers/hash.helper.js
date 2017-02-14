'use strict';
var crypto = require('crypto');

var createHmac = function (key, payload) {
   return new Buffer(crypto.createHmac('SHA256', key).update(payload, 'utf8').digest('')).toString('base64');
};

module.exports = {
    createHmac: createHmac
};
