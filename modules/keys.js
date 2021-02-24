const keys = (obj) => {
    let result = []
    if (typeof obj === "object") {
        result = Object.keys(obj);
    }
    return result;
}

module.exports = {
    keys
}