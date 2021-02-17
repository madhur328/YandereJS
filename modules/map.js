let map = (list, iteratee) => {
    let result = [];
    if (typeof list === "object" && !Array.isArray(list)) {
        result.length = Object.keys(list).length;
        for (var i = 0; i < result.length; i++) {
            result[i] = iteratee(Object.values(list)[i], Object.keys(list)[i], list)
        }
    }
    else if (list.length) {
        result.length = list.length;
        for (var i = 0; i < result.length; i++) {
            result[i] = iteratee(list[i], i, list)
        }
    }
    return result;
}

module.exports = {
    map
}