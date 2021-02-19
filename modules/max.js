const max = (list, iteratee = (listelem) => listelem) => {
    value = Object.values(list)
    let max = -Infinity
    let array = [-Infinity]
    for (let elem of value) {
        let num = iteratee(elem)
        if (num > max) {
            max = num
            array.pop()
            array.push(elem)
        }
    }
    return array.pop()
}


module.exports = {
    max
}