const groupBy = (list, iteratee) => {
    let result = {}
    let values = Object.values(list);
    for (let value of values) {
        if (typeof iteratee === "function") {
            key = iteratee(value);
        }
        else { key = value[iteratee] }
        if (result[key]) { result[key].push(value) }
        else result[key] = [value];
    }
    return result;
}

module.exports = {
    groupBy
}
