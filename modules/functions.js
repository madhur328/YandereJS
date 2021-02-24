const functions = (obj) => {
    let result = [];
    if (typeof obj === "object") {
        let values = Object.values(obj);
        let keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (typeof values[i] === "function") {
                result.push(keys[i])
            }
        }
    }
    return result;
}
module.exports = {
    functions
}