const rest = (array, index = 1) => {
    let result = array.splice(index)
    return result;
}
module.exports = {
    rest
}