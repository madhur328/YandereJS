const shuffle = list => {
    let item_vals = Object.values(list)
    let buffer = null
    //Fischer Yates shuffle
    for (let i = item_vals.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        // swap elements at index i and a random integer between 0 and i
        buffer = item_vals[j]
        item_vals[j] = item_vals[i]
        item_vals[i] = buffer
    }
    return item_vals
}

module.exports = {
    shuffle
}

let shuffle_output = shuffle([1, 2, 3, 4, 5, 6]);
console.log(shuffle_output)