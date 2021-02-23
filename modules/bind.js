const bind = (func, obj, args) => {
    Function.prototype.mybind = function (obj, args) {
        obj.fnName = this;
        obj.arrow = () => obj.fnName(args);
    }
    func.mybind(obj, args);
    return obj.arrow;
}

module.exports = {
    bind
}

var func = function (greeting) { return greeting + ': ' + this.name };
func = bind(func, { name: 'moe' }, 'hi');
console.log(func());
