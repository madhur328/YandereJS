const countBy = (list, iteratee) => {
    let result = {}
    let values = Object.values(list);
    for (let value of values) {
        key = iteratee(value);
        if (result[key]) { result[key] += 1 }
        else result[key] = 1;
    }
    return result;
}

module.exports = {
    countBy
}