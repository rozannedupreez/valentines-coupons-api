/**
 * @author Farhad Yasir
 */
'use strict';
var getUTCDateTime = function(){
    var now = new Date();
    return now.getUTCFullYear()+'-'
        +(now.getUTCMonth()+1)+'-'
        +now.getUTCDate()+' '
        +now.getUTCHours()+':'
        +now.getUTCMinutes()+':'
        +now.getUTCSeconds()
};

module.exports = {
    getUTCDateTime: getUTCDateTime
};