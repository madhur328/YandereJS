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


var objectType1 = { one: 1, two: 4, three: 9, four: 16, five: 25 }   // perfect squares of naturals
var objectType2 = { one: 1, two: 2, three: 3, four: 4, five: 5 }    // naturals
var objectType3 = { one: 2, two: 28, three: 6, four: 8, five: 10 }   // all even
var objectType4 = { one: 1, two: 3, three: 5, four: 7, five: 9 }    // all odd
var objectType5 = [objectType1, objectType2, objectType3, objectType4]


const func = elem => elem.two
var max_obj = reduce(objectType5, (x, y) => func(x) > func(y) ? x : y)
console.log(max_obj)