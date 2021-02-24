const extendOwn = (destination, ...sources) => {
    for (var source of sources) {
        if (typeof source === "object") {
            let keys = Object.keys(source);
            for (var i = 0; i < keys.length; i++) {
                destination[keys[i]] = source[keys[i]]
            }
        }
    }
    return destination;
}
module.exports = {
    extendOwn
}