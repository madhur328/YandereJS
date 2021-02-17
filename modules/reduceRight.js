const reduceRight = (list, iteratee, memo) => {
    for (var i = Object.keys(list).length - 1; i >= 0; i--) {
        memo = iteratee(memo, Object.values(list)[i], Object.keys(list)[i], list)
    }
    return memo;
}

module.exports = {
    reduceRight
}
