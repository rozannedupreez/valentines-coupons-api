'use strict';
var Sequelize   = require('sequelize');

var Coupon = db.define('coupon', {
    id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
    name: {type: Sequelize.STRING, allowNull: false},
    image: {type: Sequelize.STRING, allowNull: false},
    redeemed: {type: Sequelize.INTEGER, allowNull: false}
});

module.exports = Coupon;
