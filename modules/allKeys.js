const allKeys = (obj) => {
    let result = [];
    if (typeof obj === "object") {
        result = Object.keys(obj);
        let result1 = Object.keys(obj.__proto__);
        result.push(...result1);
    }
    return result;
}
module.exports = {
    allKeys
}