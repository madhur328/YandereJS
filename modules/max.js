const reduce = require('./reduce')
const max = (list, iteratee) => {
    let values = Object.values(list)
    for (var value of values) {
        let arr = Object.entries(value)
        return
    }
}


module.exports = {
    max
}

var arrayType1 = [1, 2, 3, 4, 5]            // natural numbers
var arrayType2 = [1, 3, 5, 7, 9]           // odd natural
var arrayType3 = [2, 4, 6, 8, 10]          // even natural
var arrayType4 = [1, 4, 5, 8, 9]           // base odd with even elements at even indices 
var arrayType5 = [2, 3, 6, 7, 10]           // base even with odd elements at even indices
var objectType1 = { one: 1, two: 4, three: 9, four: 16, five: 25 }   // perfect squares of naturals
var objectType2 = { one: 1, two: 2, three: 3, four: 4, five: 5 }    // naturals
var objectType3 = { one: 2, two: 4, three: 6, four: 8, five: 10 }   // all even
var objectType4 = { one: 1, two: 3, three: 5, four: 7, five: 9 }    // all odd
var objectType5 = { objectType1, objectType2, objectType3, objectType4 }
var functionType1 = (num) => { return num % 2 != 0 }         // odd check
var functionType2 = (num) => { return num % 2 == 0 }        // even check
var functionType3 = (num) => { return num % 2 != 0 }
var functionType4 = (num) => { return num % 2 != 0 }
var functionType5 = (num) => { return num % 2 != 0 }



var odd = max(objectType5, a => a.three)
console.log(odd)