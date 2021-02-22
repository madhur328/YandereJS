const map = (list, iteratee) => {
    let result = [];
    for (var i = 0; i < Object.values(list).length; i++) {
        result[i] = iteratee(Object.values(list)[i], Object.keys(list)[i], list)
    }
    return result;
}

module.exports = {
    map
}