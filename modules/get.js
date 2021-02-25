const { toPath } = require('./toPath.js');

const get = (obj, path, defaultValue) => {
    path = toPath(path);
    let result = obj;
    for (var i in path) {
        if (path[i] in result) {
            result = result[path[i]]
        }
        else { return defaultValue }
    }
    return result;
}
module.exports = {
    get
}