const first = (...args) => {
    let [iterable, n] = args
    if (iterable && iterable.length && typeof iterable.length === "number") {
        if (typeof n === "undefined") return iterable[0]
        if (n < 0) n = 0
        // iterable may be an array or string
        if (typeof iterable === "string") return iterable.slice(0, n).split('')
        // else iterable is array
        return iterable.slice(0, n)
    }
    if (typeof iterable !== "undefined" && !iterable.length && typeof n !== "undefined") return []
}

module.exports = {
    first
}


// Test 1   no arguments
let first_output = first(iterable)
console.log(first_output)   // expected output: undefined

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 2  single non array argument
// first_output = first(1)
// console.log(first_output)  // expected output: undefined

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 3  two arguments; first is not an array
// first_output = first(1, 2)
// console.log(first_output)  // expected output: []

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 4  multiple arguments; first is non array
// first_output = first(1, 2, [5, 7])
// console.log(first_output)  // expected output: []

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 5  single array argument
// first_output = first([5, 7])
// console.log(first_output)  // expected output: first element of the array

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 6  two args; array argument and n < array length
// first_output = first([1, 2, 3, 4, 5, 6], 3)
// console.log(first_output)  // expected output: first n elements of array

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 7  two args; array argument and n > array length
// first_output = first([1, 2, 3, 4, 5, 6], 15)
// console.log(first_output)  // expected output: complete array

// // Test 8  two args; array argument and n is -ve
// first_output = first([1, 2, 3, 4, 5, 6], -2)
// console.log(first_output)  // expected output: []

// // Test 7  string argument;
// first_output = first("abcdefg")
// console.log(first_output)  // expected output: string first elem

// // Test 8  two args; string and n < string length
// first_output = first("abcde", 4)
// console.log(first_output)  // expected output: ["a", "b", "c", "d"]