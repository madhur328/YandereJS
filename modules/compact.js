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
