const pairs = (obj) => {
    let result = [];
    if (typeof obj === "object") {
        result = Object.entries(obj);
    }
    return result;
}
module.exports = {
    pairs
}