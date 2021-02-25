const isNull = (object) => {
    return object === null
}

module.exports = {
    isNull
}

// // Test1 check value [0, 1, true , false , "" , "asd", [], [1], {}, {one:1}, undefined,  null, NaN]
// let isNullOutput = isNull(NaN)
// console.log(isNullOutput)