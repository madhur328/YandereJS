const invert = (obj) => {
    let result = {}
    if (typeof obj === "object") {
        let keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            result[obj[keys[i]]] = keys[i]
        }
    }
    return result;
}
module.exports = {
    invert
}