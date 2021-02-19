const max = (list, iteratee = (listelem) => listelem) => {
    let value = Object.values(list)
    let max = -Infinity
    let result = [-Infinity]
    for (let elem of value) {
        let num = iteratee(elem)
        if (num > max) {
            max = num
            result.pop()
            result.push(elem)
        }
    }
    return result.pop()
}


module.exports = {
    max
}