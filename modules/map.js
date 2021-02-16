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

var a = map({ one: "a", two: 2, three: 3 }, function (n) { return n * n });
console.log(a)