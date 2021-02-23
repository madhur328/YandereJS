const indexOf = (array, value, isSorted = false) => {
    for (var i = 0; i < array.length; i++) {
        if (isSorted) {
            if (value < array[i]) {
                return -1;
            }
        }
        if (array[i] === value) {
            return i
        }
    }
    return -1;
}
module.exports = {
    indexOf
}