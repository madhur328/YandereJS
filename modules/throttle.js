var x = 0;
var queue = [];
const throttle = (func, wait) => {
    return function () {
        if (x === 0 && queue.length === 0) {
            x++;
            setTimeout(() => { if (queue.length) { queue.pop()() }; x-- }, wait)
            func();
        }
        else if (queue.length === 0) {
            queue.push(func)
        }
    }
}
module.exports = {
    throttle
}
// var a = () => { console.log(new Date()) }
// var b = throttle(a, 3000)
// b();
// b();
// b();
// setTimeout(b, 4000);
// setTimeout(b, 6000)
// setTimeout(b, 2000)