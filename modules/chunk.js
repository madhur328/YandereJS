const chunk = (array, length) => {
    let result = [];
    if (array.length) {
        result.length = Math.ceil(array.length / length)
        for (var i = 0; i < result.length; i++) {
            result[i] = [];
            for (var j = 0; j < length; j++) {
                if (array[0]) {
                    result[i].push(array[0]);
                    array.shift();
                }
            }
        }
    }
    return result;
}
module.exports = {
    chunk
}