'use strict';

var version                = require('../config').api.v1;
var couponController      = require('../controllers/coupon.controller');
var couponValidator       = require('../utilities/validators/coupon.validator');

app.post('/api/'+version+'/coupons',[couponValidator.add, couponController.add])
    .put('/api/'+version+'/coupons/:id/redeemed/:redeemed',[couponValidator.add, couponController.update])
    .get('/api/'+version+'/coupons/:offset/:limit', couponController.findAll)
    .get('/api/'+version+'/coupons/:id',couponController.findById)
    .delete('/api/'+version+'/coupons/:id', couponController.remove);
