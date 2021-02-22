const { compact } = require('./compact.js');

const uniq = (array, isSorted = false, iteratee) => {
    for (var i = 1; i < array.length; i++) {
        if (isSorted === true) {
            if (array[i] === array[i - 1]) { array[i] = null }
        }
        else {
            for (var j = 0; j < i; j++) {
                if (array[i] === array[j]) { array[i] = null }
            }
        }
    }
    return compact(array);
}

module.exports = {
    uniq
}