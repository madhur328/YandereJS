const pluck = (list, propertyName) => {
    let result = [];
    let values = Object.values(list);
    for (value of values) {
        result.push(value[propertyName])
    }
    return result;
}
module.exports = {
    pluck
}
