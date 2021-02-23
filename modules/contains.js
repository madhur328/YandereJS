const contains = (list, value, fromIndex = 0) => {
    item_vals = Object.values(list)
    if (item_vals.indexOf(value, fromIndex) !== -1) return true
    return false
}

module.exports = {
    contains
}