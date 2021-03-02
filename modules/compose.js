const compose = (...funcs) => {
    return function (str) {
        let result = funcs.pop()(str)
        while (funcs.length > 0) {
            let buffer = result;
            result = funcs.pop()(buffer)
        }
        return result;
    }
}

module.exports = {
    compose
}
// var greet = function (name) { return "hi: " + name; };
// var exclaim = function (statement) { return statement.toUpperCase() + "!"; };
// var welcome = compose(greet, exclaim);
// console.log(welcome('moe'));
