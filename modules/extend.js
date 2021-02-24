const extend = (destination, ...sources) => {
    for (var source of sources) {
        if (typeof source === "object") {
            let values = Object.values(source);
            let keys = Object.keys(source);
            for (var i = 0; i < keys.length; i++) {
                destination[keys[i]] = values[i]
            }
        }
    }
    return destination;
}
module.exports = {
    extend
}