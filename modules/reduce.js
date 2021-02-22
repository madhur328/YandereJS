const reduce = (...args) => {
    let [list, iteratee, memo] = args;
    let i = 0;
    entries = Object.entries(list)
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


var objectType1 = { one: 1, two: 4, three: 9, four: 16, five: 25 }   // perfect squares of naturals
var objectType2 = { one: 1, two: 2, three: 3, four: 4, five: 5 }    // naturals
var objectType3 = { one: 2, two: 28, three: 6, four: 8, five: 10 }   // all even
var objectType4 = { one: 1, two: 3, three: 5, four: 7, five: 9 }    // all odd
var objectType5 = [objectType1, objectType2, objectType3, objectType4]


const func = elem => elem.two
var max_obj = reduce(objectType1, (num1, num2) => num1 * num2 ** 0.5)
console.log(max_obj)