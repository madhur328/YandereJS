const rest = (iterable, index = 1) => {
    if (iterable) {
        if (iterable.length && typeof iterable.length === "number") {
            // iterable may be array or string type
            if (typeof iterable === "string") return iterable.slice(index).split('')
            return iterable.slice(index)
        } return []
    }
}

module.exports = {
    rest
}

let rest_output = rest([1, 2, 3, 4, 5, 6])
console.log(rest_output)