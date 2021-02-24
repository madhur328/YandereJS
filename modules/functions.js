const functions = (obj) => {
    let result = [];
    if (typeof obj === "object") {
        let keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (typeof obj[keys[i]] === "function") {
                result.push(keys[i])
            }
        }
    }
    return result;
}
module.exports = {
    functions
}