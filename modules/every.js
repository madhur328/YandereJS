const every = (...args) => {
    let [list, iteratee] = args
    if (args.length < 2) { iteratee = elem => elem }
    item_vals = Object.values(list)
    for (var item_val of item_vals) {
        if (!iteratee(item_val)) {
            return false
        }
    }
    return true
}

module.exports = {
    every
}

let every_output = every([1, 2, 3, 4, 5], elem => elem < 6)
console.log(every_output)