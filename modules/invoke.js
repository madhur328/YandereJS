const invoke = (list, methodName) => {
    let result = [];
    let item_vals = Object.values(list);
    for (item_val of item_vals) {
        result.push(item_val[methodName]())
    }
    return result;
}

module.exports = {
    invoke
}