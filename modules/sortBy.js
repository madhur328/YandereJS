const sortBy = (list, iteratee) => {
    if (typeof iteratee === "string") { let str = iteratee; iteratee = elem => elem[str] }
    item_vals = Object.values(list)
    let max_value = iteratee(item_vals[0])
    let min_value = iteratee(item_vals[0])
    let result_arr = [item_vals[0]]
    let result_arr_copy = result_arr
    for (let i = 1; i < item_vals.length; i++) {
        let value = iteratee(item_vals[i])
        if (value > max_value) {
            max_value = value
            result_arr.push(item_vals[i])
            result_arr_copy = result_arr
        } else {
            for (let j = result_arr_copy.length - 1; j >= 0; j--) {
                if (value > iteratee(result_arr[j])) {
                    result_arr.splice(j + 1, 0, item_vals[i])
                    break;
                }
                else if (value < min_value) {
                    min_value = value
                    result_arr.splice(0, 0, item_vals[i])
                }
            }
            result_arr_copy = result_arr
        }
    }
    return result_arr
}

module.exports = {
    sortBy
}

// let stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
// let sortByOutput = sortBy(stooges, function (elem) { return elem.name })
// console.log(sortByOutput)


let stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
let sortByOutput = sortBy(stooges, 'name')
console.log(sortByOutput)

