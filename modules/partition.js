const partition = (list, predicate) => {
    let items = Object.values(list);
    let result = [[], []];
    for (let item of items) {
        result[predicate(item) ? 0 : 1].push(item)
    }
    return result;
}

module.exports = {
    partition
}