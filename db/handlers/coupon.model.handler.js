'use strict';

var async           = require('async');
var CouponModel     = require('../models/coupon.model');
var errorHandler    = require('../../utilities/helpers/error.handler');


var add = function(coupon, callback){
    var _coupon = {
        id: coupon.id,
        id: coupon.name,
        id: coupon.image,
        id: coupon.redeemed,
    };
    CouponModel.create(_coupon)
        .then(function(newCoupon){
            callback(null, newCoupon);
        })
        .catch(function(err){
            logger.error(err);
            callback(errorHandler.INTERNAL_DB_ERROR);
        });
};

var findAll = function(offset, limit, callback){
    CouponModel.findAll({
        limit: parseInt(limit),
        offset: parseInt(offset)
    }).then(function(coupons){
        coupons ? callback(null, coupons): callback(errorHandler.DATA_NOT_FOUND);;
    })
        .catch(function(err){
            logger.error(err);
            callback(errorHandler.INTERNAL_DB_ERROR);
        });
};

var findById = function(id, callback){

    CouponModel.findById(id).then(function (coupon) {
        coupon ? callback(null, coupon) : callback(errorHandler.DATA_NOT_FOUND);
    }).catch(function(err){
        logger.error(err);
        callback(errorHandler.INTERNAL_DB_ERROR);
    })

};

var remove = function(id, callback){
    callback();
};

var update = function(id, redeemed, callback){
    console.log("update");
    CouponModel.update({
            redeemed: redeemed,
        },
        {
            where: { id : id }
        }
    ).then(function(newCoupon){
        callback(null, newCoupon);

    }).catch(function(err) {
        logger.error(err);
        callback(err);
    });
};

module.exports = {
    add: add,
    findAll: findAll,
    findById: findById,
    remove: remove,
    update: update
};

