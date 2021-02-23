const some = (...args) => {
    let [list, iteratee] = args
    if (args.length < 2) {
        iteratee = elem => elem
    }
    item_vals = Object.values(list)
    for (var item_val of item_vals) {
        if (iteratee(item_val)) {
            return true
        }
    }
    return false
}

module.exports = {
    some
}

let some_output = some([1, 2, 3, 4, 5, 6], elem => elem > 5)
console.log(some_output)