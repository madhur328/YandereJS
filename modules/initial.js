const initial = (...args) => {
    let [array, n] = args
    if (array && array.length) {
        return array.splice(0, array.length - n)
    }
}

module.exports = {
    initial
}

// Test 1   no arguments
let initial_output = initial("asd")
console.log(initial_output)   // expected output: error

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 2  single non array argument
// initial_output = initial(1)
// console.log(initial_output)  // expected output: undefined

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 3  two arguments; first is not an array
// initial_outpuinitial(1, 2)
// console.log(initial_output)  // expected output: undefined

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 4  multiple arguments; first is non array
// initial_output = initial(1, 2, [5, 7])
// console.log(initial_output)  // expected output: undefined

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 5  single array argument
// initial_outpuinitial([5, 7])
// console.log(initial_output)  // expected output: first element of the array

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 6  two args; array argument and n < array length
// initial_output = initial([1, 2, 3, 4, 5, 6], 3)
// console.log(initial_output)  // expected output: first n elements of array

// console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n")

// // Test 7  two args; array argument and n > array length
// initial_output = initial([1, 2, 3, 4, 5, 6], 15)
// console.log(initial_output)  // expected output: complete array