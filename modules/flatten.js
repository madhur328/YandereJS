function flatten(array, depth) {
    let flattened = []
    for (var arr of array) {
        if (typeof arr !== 'object') {
            flattened.push(arr);
        } else {
            depth--
            if (depth === 0) { break }
            flatten(arr, depth);
        }
    }
    return flattened
}

console.log(flatten([1, 2, 3, 4, 5, [1, 2, [3, [7, 8, 9]]]], 3))