const map = (list, iteratee) => {
    let result = [];
    let item_keys = Object.keys(list)
    let item_vals = Object.values(list)
    for (var i in item_keys) {
        let mapped = iteratee(item_vals[i], item_keys[i], list)
        result.push(mapped)
    }
    return result;
}

module.exports = {
    map
}

console.log("\n_ _ _ _ _ _ _ _\n")
let map_output = map([1, 2, 3], function (num) { return num * 3; });
console.log(map_output)
console.log("\n_ _ _ _ _ _ _ _\n")
map_output = map({ one: 1, two: 2, three: 3 }, function (num, key) { return num * 3; });
console.log(map_output)
console.log("\n_ _ _ _ _ _ _ _\n")
