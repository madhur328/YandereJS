const every = (list, func) => {
    if (typeof func !== "function") return true
    for (var elem of list) {
        if (!func(elem)) {
            return false
        }
    }
    return true
}

module.exports = {
    every
}