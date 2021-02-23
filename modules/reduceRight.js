const reduceRight = (...args) => {
    let [list, iteratee, memo] = args
    item_vals = Object.values(list)
    let i = item_vals.length - 1    //last elem index
    if (args.length < 3) {
        memo = item_vals[i]
        i--
    }
    for (i; i >= 0; i--) {
        memo = iteratee(memo, Object.values(list)[i], Object.keys(list)[i], list)
    }
    return memo;
}

module.exports = {
    reduceRight
}
console.log(reduceRight([1, 2, 3, 4, 5], n => n % 7, 1))
