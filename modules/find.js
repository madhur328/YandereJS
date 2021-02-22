const find = (list, iteratee) => {
    const item_vals = Object.values(list)
    for (var item_val of item_vals) {
        if (iteratee(item_val)) {
            return item_val
        }
    }
    return undefined
}

module.exports = {
    find
}