
'use strict';

module.exports = {
    host: 'localhost',
    port: 3000,
    api: {
        v1: '1.0'
    },
    db: {
        host: 'rozannedbinstance.cebghr7fjcfn.ap-southeast-2.rds.amazonaws.com',
        port: 3306,
        dbName: 'ValentineCoupon',
        username: 'Roxi_B4b3',
        password: 'Foxi250190',
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        }
    }
};
