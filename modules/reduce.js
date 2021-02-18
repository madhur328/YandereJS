const reduce = (list, iteratee, memo = "undefined") => {
    entries = Object.entries(list);
    if (memo === "undefined") { memo = entries[0][1]; entries.shift() }
    for (var entry of entries) {
        memo = iteratee(memo, entry[1], entry[0], list)
    }
    return memo;
}

module.exports = {
    reduce
}
