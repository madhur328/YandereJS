const initial = (...args) => {
    let [iterable, n] = args
    if (iterable && iterable.length && typeof iterable.length === "number") {
        // iterable variable may be array or string
        if (!n) n = 1
        else if (n && n > iterable.length) n = iterable.length
        if (typeof iterable === "string") {
            return iterable.slice(0, iterable.length - n).split('')
        } else return iterable.slice(0, iterable.length - n)
    }
    // if non-iterable is received return empty array
    return []
}

module.exports = {
    initial
}

// Test 1   no arguments
<<<<<<< HEAD
let initial_output = initial("asd")
console.log(initial_output)   // expected output: error
=======
let initial_output = initial([1, 2, 3, 4, 5, 6], 15)
console.log(initial_output)   // expected output: []
>>>>>>> 1026c8bfeae3369d49e9e2a021af52d07b1226bc

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 2  single non array argument
// initial_output = initial(1)
// console.log(initial_output)  // expected output: []

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 3  string argument
// initial_output = initial("abcde")
// console.log(initial_output)  // expected output: array of string elems without the last element

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 4  two arguments; first is not an array
// initial_outpuinitial(1, 2)
// console.log(initial_output)  // expected output: []

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 5  multiple arguments; first is non array
// initial_output = initial(1, 2, [5, 7])
// console.log(initial_output)  // expected output: []

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 6  single array argument
// initial_outpuinitial([5, 7])
// console.log(initial_output)  // expected output: first element of the array

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 7  empty array argument
// initial_outpuinitial([])
// console.log(initial_output)  // expected output: []

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 8  two args; array argument and n < array length
// initial_output = initial([1, 2, 3, 4, 5, 6], 3)
// console.log(initial_output)  // expected output: first ( array.length -n ) elements of array

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 9  two args; array argument and n > array length
// initial_output = initial([1, 2, 3, 4, 5, 6], 15)
// console.log(initial_output)  // expected output: []