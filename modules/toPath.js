const { isArray } = require('./isArray.js');

const toPath = (path) => {
    return isArray(path) ? path : [path]
}
module.exports = {
    toPath
}
