const findLastIndex = (array, predicate) => {
    for (var i = array.length - 1; i >= 0; i--) {
        if (predicate(array[i])) { return i }
    }
    return -1;
}
module.exports = {
    findLastIndex
}