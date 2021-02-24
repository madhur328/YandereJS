const sample = (...args) => {
    let [list, n] = args
    let result = []
    let item_vals = Object.values(list)
    if (args.length < 2) {
        rand_index = Math.floor(Math.random() * item_vals.length)
        choosen_elem = item_vals[rand_index]
        return choosen_elem
    } else {
        if (n > item_vals.length) { n = item_vals.length }
        for (i = 0; i < n && n <= (item_vals.length + result.length); i++) {
            rand_index = Math.floor(Math.random() * item_vals.length)
            choosen_elem = item_vals[rand_index]
            result.push(choosen_elem)
            item_vals.splice(rand_index, 1)
        }
        return result
    }
}

module.exports = {
    sample
}

let sample_output = sample([28, 32, 244, 923, 66], 1)
console.log(sample_output)