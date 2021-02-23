const findIndex = (array, predicate) => {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) { return i }
    }
    return -1;
}
module.exports = {
    findIndex
}