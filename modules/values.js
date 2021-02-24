const values = (obj) => {
    let result = [];
    if (typeof obj === "object") {
        result = Object.values(obj);
    }
    return result;
}
module.exports = {
    values
}