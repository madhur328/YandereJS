const min = (list, iteratee = (listelem) => listelem) => {
    value = Object.values(list)
    let min = Infinity
    let array = [Infinity]
    for (let elem of value) {
        let num = iteratee(elem)
        if (num < min) {
            min = num
            array.pop()
            array.push(elem)
        }
    }
    return array.pop()
}


module.exports = {
    min
}