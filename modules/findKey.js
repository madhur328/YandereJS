const findKey = (obj, predicate) => {
    if (typeof obj === "object") {
        let values = Object.values(obj);
        let keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (predicate(values[i])) {
                return keys[i];
            }
        }
    }
    return undefined
}
module.exports = {
    findKey
}