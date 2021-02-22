const reduce = (...args) => {
    let [list, iteratee, memo] = args;
    let entries = Object.entries(list)
    let i = 0;
    if (args.length < 3) {
        memo = list[0];
        i++;
    }
    for (i; i < entries.length; i++) {
        memo = iteratee(memo, entries[i][1], entries[i][0], list)
    }
    return memo
}

module.exports = {
    reduce
}