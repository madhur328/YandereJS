const { map } = require("./map.js");
const sortedIndex = (array, value, iteratee = n => n) => {
    let result = [];
    if (typeof iteratee === "string") {
        var str = iteratee;
        iteratee = n => n[str];
    }
    result = map(array, iteratee);
    value = iteratee(value);
    for (var i = 0; i < result.length; i++) {
        if (i === 0 && value < result[i]) { return i }
        if (i === result.length - 1 && value > result[1]) { return i + 1 }
        if (value > result[i - 1] && value < result[i]) {
            return i
        }
    }
    return 0;
}
module.exports = {
    sortedIndex
}