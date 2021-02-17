const some = (list, func = elem => elem == true) => {
    values = Object.values(list)
    if (!values.length || typeof values.length !== "number") return false
    if (typeof func !== "function") return false
    for (var value of values) {
        if (func(value)) {
            return true
        }
    }
    return false
}

module.exports = {
    some
}