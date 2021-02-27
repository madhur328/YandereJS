const last = (...args) => {
    let [iterable, n] = args
    if (args.length === 1) {
        return iterable[iterable.length - 1]
    }
    if (args.length > 1) {
        if (!iterable.length) return []
        if (n > iterable.length) n = iterable.length
        if (typeof iterable === "string") return iterable.slice(iterable.length - n).split('')
        return iterable.slice(iterable.length - n)
    }
}

module.exports = {
    last
}

let last_output = last([1, 2, 3, 4, 5, 6], 1)
console.log(last_output)