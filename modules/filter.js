const filter = (list, func) => {
    var result = []
    const values = Object.values(list)
    for (var value of values) {
        if (func(value)) {
            result.push(value)
        }
    }
    return result
}

module.exports = {
    filter
}