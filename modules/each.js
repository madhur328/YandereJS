const each = (list, iteratee) => {
    let item_keys = Object.keys(list)
    let item_vals = Object.values(list)
    for (let i in item_keys) {
        iteratee(item_vals[i], item_keys[i], list)
    }
}

module.exports = {
    each
}

each([1, 2, 3], console.log)
console.log("\n_ _ _ _ _ _ _ _ _\n")
each({ one: 4, two: 5, three: 6 }, console.log);
console.log("\n_ _ _ _ _ _ _ _ _\n")