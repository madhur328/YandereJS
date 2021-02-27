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