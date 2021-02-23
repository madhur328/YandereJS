const bind = (func, object, ...args) => {
    return func.bind(object, ...args)
}

module.exports = {
    bind
}

var func = function (greeting) { return greeting + ': ' + this.name };
func = bind(func, { name: 'moe' }, 'hi');
console.log(func())