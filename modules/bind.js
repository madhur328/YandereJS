const bind = (func, obj, args) => {
    obj.fnName = func;
    obj.arrow = () => obj.fnName(args);
    return obj.arrow;
}

module.exports = {
    bind
}

var func = function (greeting) { return greeting + ': ' + this.name };
func = bind(func, { name: 'moe' }, 'hi');
console.log(func());