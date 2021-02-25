const isNaN = (object) => {
    // NaN and only NaN compares unequal to itself
    return object !== object
}

module.exports = {
    isNaN
}

let isNaN_Output = isNaN(NaN)
console.log(isNaN_Output)