const partial = (func, ...args) => {
    return function (...inputs) {
        let resultArr = args.slice()
        let length = args.length + inputs.length
        for (var i = 0; i < length; i++) {
            if (resultArr[i] === undefined || resultArr[i] === "_") {
                resultArr[i] = inputs.shift();
            }
        }
        return func(...resultArr);
    }
}
module.exports = {
    partial
}
// var subtract = function (a, b) { return b - a; };
// sub20 = partial(subtract, '_', 20);
// console.log(sub20(5));