const isNull = (value) => {
    return value === null
}

module.exports = {
    isNull
}

// Test1 check value [0, 1, true , false , "" , "asd", [], 1], {}, {one:1}, undefined,  null]
let isNullOutput = isNull(null)
console.log(isNullOutput)