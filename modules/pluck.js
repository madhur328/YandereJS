const pluck = (list, propertyName) => {
    let result = [];
    let item_vals = Object.values(list);
    for (item_val of item_vals) {
        result.push(value[propertyName])
    }
    return result;
}
module.exports = {
    pluck
}
