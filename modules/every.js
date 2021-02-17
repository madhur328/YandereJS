const every = (list, func) => {
    if (typeof func !== "function") return true
    values = Object.values(list)
    for (var value of values) {
        if (!func(value)) {
            return false
        }
    }
    return true
}

module.exports = {
    every
}