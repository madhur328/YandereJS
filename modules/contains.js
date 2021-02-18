const contains = (list, valueToFind, fromIndex = 0) => {
    if (!list) return false
    values = Object.values(list)
    if (values.indexOf(valueToFind, fromIndex) !== -1) return true
    return false
}

module.exports = {
    contains
}