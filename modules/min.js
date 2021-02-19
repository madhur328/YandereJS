const min = (list, iteratee = (listelem) => listelem) => {
    let value = Object.values(list)
    let min = Infinity
    let result = [Infinity]
    for (let elem of value) {
        let num = iteratee(elem)
        if (num < min) {
            min = num
            result.pop()
            result.push(elem)
        }
    }
    return result.pop()
}


module.exports = {
    min
}