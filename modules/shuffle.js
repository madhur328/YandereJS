const shuffle = list => {
    let values = Object.values(list)
    let buffer = null
    for (let i = values.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        buffer = values[j]
        values[j] = values[i]
        values[i] = buffer
    }
    return values
}

module.exports = {
    shuffle
}