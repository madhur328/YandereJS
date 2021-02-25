const isUndefined = (value) => {
    return typeof value === "undefined"
}

module.exports = {
    isUndefined
}

// // Test1: undeclared variable
// let isUndefinedOutput = isUndefined(a)
// console.log(isUndefinedOutput)  //expected o/p: error: variable is not defined

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test2: unassigned variable
// var a;
// let isUndefinedOutput = isUndefined(a)
// console.log(isUndefinedOutput)  //expected o/p: true

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test3: non-undefined value variable
// // check for [ null , 0 , 1 , true , false, "undefined",  "" , [] , {}  ]
// let isUndefinedOutput = isUndefined({})
// console.log(isUndefinedOutput)  //expected o/p: false

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test4: multiple values where undefined is not the first value
// let isUndefinedOutput = isUndefined(1, 2, true, undefined)
// console.log(isUndefinedOutput)  //expected o/p: false

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test5: multiple values where undefined is the first value
// let isUndefinedOutput = isUndefined(undefined, 1, 2, true)
// console.log(isUndefinedOutput)  //expected o/p: true

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")