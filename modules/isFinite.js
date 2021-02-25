const isFinite = (object) => {
    if (typeof object !== "number") return false
    if (object === Infinity || object === -Infinity) return false
    if (object !== object) return false // if object is NaN
    return true
}

module.exports = {
    isFinite
}

// let isFiniteOutput = isFinite(NaN)
// console.log(isFiniteOutput)