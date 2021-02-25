const isEqual = (obj, other) => {
    if (obj === other) { return true }
    else if (typeof other !== "object") { return false }
    else {
        let objKeys = Object.keys(obj);
        let otherKeys = Object.keys(other);
        if (objKeys.length !== otherKeys.length) return false;
        for (var key of otherKeys) {
            if (!isEqual(obj[key], other[key])) {
                return false;
            }
        }
        return true;
    }
}
module.exports = {
    isEqual
}