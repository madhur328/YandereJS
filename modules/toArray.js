const toArray = (list) => {
    return Object.values(list);
}

module.exports = {
    toArray
}

let toArrayOutput = toArray([1, 2])
console.log(toArrayOutput)
