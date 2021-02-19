const sample = (list, n) => {
    let result = []
    let values = Object.values(list)
    let num = Math.floor(Math.random() * values.length)
    if (n === undefined) return values.splice(num, 1)[0]
    if (n <= 0) { return [] }
    if (n > values.length) { n = values.length }
    for (let i = 0; i < n; i++) {
        result.push(values.splice(num, 1)[0])
        num = Math.floor(Math.random() * values.length)
    }
    return result
}

module.exports = {
    sample
}

console.log(sample([1, 2, 3, 4, 5]))