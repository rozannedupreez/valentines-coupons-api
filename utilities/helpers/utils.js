/**
 * @author Farhad Yasir
 */

var parseToJSON = function(object) {
    var json;
    try {
        json = JSON.parse(object);
    }catch(e){
        logger.error(e);
        json = object;
    }
    return json;
};
var randomNumber = function(start, end){
    return Math.floor(Math.random() * end) + start;
};

module.exports = {
    parseToJSON: parseToJSON,
    randomNumber: randomNumber
};
