const { compact } = require("./compact.js")

const without = (array, ...arg) => {
    let result = array;
    let n = result.length;
    for (var i = 0; i < arg.length; i++) {
        for (var j = 0; j < n; j++) {
            if (result[j] === arg[i]) {
                result[j] = null;
            }
        }
    }
    return compact(result);
}

module.exports = {
    without
}