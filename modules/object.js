const { max } = require('./max.js');
const object = (list, values) => {
    let result = {};
    if (!values) {
        for (var i = 0; i < list.length; i++) {
            result[list[i][0]] = list[i][1];
        }
    }
    else {
        for (var i = 0; i < list.length; i++) {
            result[list[i]] = values[i];
        }
    }
    return result;
}
module.exports = {
    object
}