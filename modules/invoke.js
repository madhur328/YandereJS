const invoke = (list, methodName) => {
    let result = [];
    let values = Object.values(list);
    for (value of values) {
        result.push(value[methodName]())
    }
    return result;
}

module.exports = {
    invoke
}