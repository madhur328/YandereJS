const pluck = (list, propertyName) => {
    let result = [];
    let item_vals = Object.values(list);
    for (item_val of item_vals) {
        result.push(item_val[propertyName])
    }
    return result;
}
module.exports = {
    pluck
}

let stooges = {
    key1: { name: 'moe', age: 40 },
    key2: { name: 'larry', age: 50 },
    key3: { name: 'curly', age: 60 }
}

let pluck_output = pluck(stooges, 'name')
console.log(pluck_output)