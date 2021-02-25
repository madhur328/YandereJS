const size = (list) => {
    return Object.keys(list).length
}

module.exports = {
    size
}

// Test
let sizeOutput = size([1, 2, 3, 4, 5]);
console.log(sizeOutput)

console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _\n")


sizeOutput = size({ one: 1, two: 2, three: 3 });
console.log(sizeOutput)


console.log("\n_ _ _ _ _ _ _ _ _ _ _ _ _\n")