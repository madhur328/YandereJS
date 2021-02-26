const first = (...args) => {
    let [iterable, n, ...rest] = args
    if (iterable && iterable.length && typeof iterable.length === "number") {
        if (!n) return iterable[0]
        if (n && n < 0) n = 0
        // iterable may be an array or string
        if (typeof iterable === "string") return iterable.slice(0, n).split('')
        // else iterable is array
        return iterable.slice(0, n)
    }
    if (iterable && !iterable.length && n) return []
}

module.exports = {
    first
}


// // Test 1   no arguments
// let first_output = first()
// console.log(first_output)   // expected output: undefined

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 2  single non array argument
// first_output = first(1)
// console.log(first_output)  // expected output: undefined

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 3  two arguments; first is not an array
// first_output = first(1, 2)
// console.log(first_output)  // expected output: undefined

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 4  multiple arguments; first is non array
// first_output = first(1, 2, [5, 7])
// console.log(first_output)  // expected output: undefined

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