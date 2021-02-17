const find = (list, func) => {
    values = Object.values(list)
    for (var value of values) {
        if (func(value)) {
            return value
        }
    }
    return undefined
}

console.log(find({ one: 8, two: 2, three: 6, four: 4, five: 5 }, function (num) { return num % 2 != 0 }))