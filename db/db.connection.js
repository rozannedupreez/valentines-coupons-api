'use strict';

var config      = require('../config');
var Sequelize   = require('sequelize');
var connectionString = 'mariadb://' +
                        config.db.username+':'+
                        config.db.password+'@'+
                        config.db.host+":"+
                        config.db.port+'/'+
                        config.db.dbName;

var db = new Sequelize(connectionString);
module.exports = db;