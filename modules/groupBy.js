const groupBy = (list, iteratee) => {
    let result = {}
    let values = Object.values(list);
    for (let value of values) {
        key = iteratee(value);
        if (result[key]) { result[key].push(value) }
        else result[key] = [value];
    }
    return result;
}

module.exports = {
    groupBy
}