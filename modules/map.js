const map = (list, iteratee) => {
    let result = [];
    result.length = Object.keys(list).length;
    for (var i = 0; i < result.length; i++) {
        result[i] = iteratee(Object.values(list)[i], Object.keys(list)[i], list)
    }
    return result;
}

module.exports = {
    map
}