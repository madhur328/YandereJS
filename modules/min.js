const min = (list, iteratee = (listelem) => listelem) => {
    let item_vals = Object.values(list)
    let min_value = Infinity
    let result_arr = [Infinity]
    for (let item_val of item_vals) {
        let value = iteratee(item_val)
        if (value < min_value) {
            min_value = value
            result_arr.pop()
            result_arr.push(item_val)
        }
    }
    return result_arr.pop()
}


module.exports = {
    min
}

let numbers = [10, 5, 100, 2, 1000]
let min_output = min(numbers)
console.log(min_output)