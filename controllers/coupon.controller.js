'use strict';

var responseHelper = require('../utilities/helpers/response.helper');
var couponModelHandler = require('../db/handlers/coupon.model.handler');


var add = function (req, res) {
    couponModelHandler.add(req.body, function (err, coupon) {
        responseHelper.send(err, coupon, res);
    });
};

var findAll = function (req, res) {
    var offset = req.params.offset || 0;
    var limit = req.params.limit || 10;
    couponModelHandler.findAll(offset, limit, function (err, coupon) {
        responseHelper.send(err, coupon, res);
    });
};

var findById = function (req, res) {

    couponModelHandler.findById(req.params.id, function (err, coupon) {
        responseHelper.send(err, coupon, res);
    });
};

var remove = function (req, res) {

    couponModelHandler.add(req.body, function (err, coupon) {
        responseHelper.send(err, coupon, res);
    });
};

var update = function (req, res) {
    console.log(req.body);
    console.log(req.params);
    couponModelHandler.update(req.params.id, req.params.redeemed, function (err, coupon) {
        responseHelper.send(err, coupon, res);
    });
};

module.exports = {
    add: add,
    findAll: findAll,
    findById: findById,
    remove: remove,
    update: update
};
