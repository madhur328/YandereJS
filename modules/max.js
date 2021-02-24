const max = (list, iteratee = (listelem) => listelem) => {
    let item_vals = Object.values(list)
    let max_value = -Infinity
    let result_arr = [-Infinity]
    for (let item_val of item_vals) {
        let value = iteratee(item_val)
        if (value > max_value) {
            max_value = value
            result_arr.pop()
            result_arr.push(item_val)
        }
    }
    return result_arr.pop()
}



module.exports = {
    max
}

let stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
let max_output = max(stooges, function (stooge) { return stooge.age; });
console.log(max_output)