const compact = (list) => {
    let result = []
    let item_vals = Object.values(list);
    for (let item_val of item_vals) {
        if (item_val) { result.push(item_val) }
    }
    return result;
}

module.exports = {
    compact
}

//Test
let compactOutput = compact([0, 1, false, 2, '', 3]);
console.log(compactOutput)