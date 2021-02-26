const { isArray } = require('./isArray.js');
const { extend } = require('./extend.js');

const clone = (obj) => {
    if (typeof obj === "object") {
        //slice to copy string and array, extend to copy object
        return (isArray(obj) || typeof obj === "string") ? obj.slice() : extend({}, obj)
    }
    else { var result = obj; return result }
}
module.log = {
    clone
}