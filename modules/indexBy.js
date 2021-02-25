const indexBy = (list, iteratee) => {
    let result = {}
    let item_vals = Object.values(list);
    for (let item_val of item_vals) {
        if (typeof iteratee === "function") {
            key = iteratee(item_val);
        }
        else { key = item_val[iteratee] }
        result[key] = item_val;
    }
    return result;
}

module.exports = {
    indexBy
}


let stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
let indexByOutput = indexBy(stooges, 'name');
console.log(indexByOutput)