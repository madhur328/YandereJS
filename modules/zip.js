const { max } = require('./max.js');
const zip = (...arrays) => {
    let n = max(arrays, n => n.length);
    let result = [];
    for (var i = 0; i < arrays.length; i++) {
        for (var j = 0; j < n.length; j++) {
            if (!result[j]) { result[j] = [] }
            result[j].push(arrays[i][j])
        }
    }
    return result;
}

module.exports = {
    zip
}