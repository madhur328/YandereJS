const flatten = (array, depth = Infinity) => {
    let result = [];
    if (depth === false) { depth = Infinity }
    if (array instanceof Array === true || typeof array === "string") {
        for (var i = 0; i < depth; i++) {
            var count = 0;
            for (var arr of array) {
                if (arr instanceof Array) {
                    result.push(...arr);
                    count++;
                }
                else { result.push(arr) }
            }
            array = result;
            result = [];
            if (count === 0) { break }
        }
        result = array
    }
    return result;
}
module.exports = {
    flatten
}