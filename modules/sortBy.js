const sortBy = (list, iteratee) => {
    if (typeof iteratee === "string") { let str = iteratee; iteratee = elem => elem[str] }
    let item_vals = Object.values(list)
    let temp = null
    //bubble sort algorithm
    for (let i = item_vals.length - 2; i >= 0; i--)
        for (let j = 0; j <= i; j++) {
            if (iteratee(item_vals[j]) > iteratee(item_vals[j + 1])) {
                temp = item_vals[j + 1]
                item_vals[j + 1] = item_vals[j]
                item_vals[j] = temp
            }
        }
    return item_vals
}

module.exports = {
    sortBy
}

let stooges = [{ name: 'moe', age: 55 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
let sortByOutput = sortBy(stooges, 'age')
console.log(sortByOutput)