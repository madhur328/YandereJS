const initial = (array, n = 1) => {
    let result = array.splice(0, array.length - n)
    return result
}

module.exports = {
    initial
}