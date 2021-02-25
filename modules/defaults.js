const defaults = (obj, ...args) => {
    var result;
    if (typeof obj === "string") { return ["String: " + obj] }
    else if (typeof obj === "number") { return ["Number: " + obj] }
    for (var arg of args) {
        if (typeof arg === "object") {
            keys = Object.keys(arg)
        }
        for (var key of keys) {
            if (obj[key] === undefined) { obj[key] = arg[key] }
        }
    }
    return obj;
}
module.exports = {
    defaults
}