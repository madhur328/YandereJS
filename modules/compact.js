const compact = (list) => {
    let items = Object.values(list);
    let result = []
    for (let item of items) {
        if (item) { result.push(item) }
    }
    return result;
}

module.exports = {
    compact
}