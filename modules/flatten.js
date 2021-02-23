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

//flatten single depth
const flatten2D = (arr2D) => {
    arr1D = []
    for (let elem of arr2D) {
        if (Array.isArray(elem)) {
            arr1D.push(...elem)
        }
        arr1D.push(elem)
    }
    return arr1D
}