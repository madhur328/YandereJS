const findKey = (obj, predicate) => {
    if (typeof obj === "object") {
        let keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (predicate(obj[keys[i]])) {
                return keys[i];
            }
        }
    }
    return undefined
}
module.exports = {
    findKey
}