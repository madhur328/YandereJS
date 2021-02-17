const reduce = (list, iteratee, memo) => {
    for (var i = 0; i < Object.keys(list).length; i++) {
        memo = iteratee(memo, Object.values(list)[i], Object.keys(list)[i], list)
    }
    return memo;
}

module.exports = {
    reduce
}