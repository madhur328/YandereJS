const groupBy = (list, iteratee) => {
    let result = {}
    let item_vals = Object.values(list);
    for (let item_val of item_vals) {
        if (typeof iteratee === "function") {
            key = iteratee(item_val);
        } else {
            key = item_val[iteratee]
        }
        if (key in result) { result[key].push(item_val) }
        else result[key] = [item_val];
    }
    return result;
}

module.exports = {
    groupBy
}


let groupByOutput = groupBy([1.3, 2.1, 2.4], function (num) { return Math.floor(num); });
console.log(groupByOutput)

console.log("\n_ _ _ _ _ _ _ _ _ _\n")

groupByOutput = groupBy(['one', 'two', 'three'], 'length');
console.log(groupByOutput)

console.log("\n_ _ _ _ _ _ _ _ _ _\n")


