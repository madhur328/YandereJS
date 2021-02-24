const countBy = (list, iteratee) => {
    let result = {}
    let item_vals = Object.values(list);
    for (let item_val of item_vals) {
        key = iteratee(item_val);
        if (key in result) { result[key] += 1 }
        else result[key] = 1;
    }
    return result;
}

module.exports = {
    countBy
}

let countByOutput = countBy([1, 2, 3, 4, 5], function (num) {
    return num % 2 == 0 ? 'even' : 'odd';
});
console.log(countByOutput)
