const isBoolean = (object) => {
    return object === true || object === false
}

module.exports = {
    isBoolean
}

// // Test1 check value [0, 1, true , false , "" , "asd", [], [1], {}, {one:1}, undefined,  null, NaN]
// let isBooleanOutput = isBoolean(NaN)
// console.log(isBooleanOutput)