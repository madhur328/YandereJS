const _yandere = require('./index.js');


// Tests for package
//for methods each
_yandere.each([1, 2, 3, 4], console.log);

console.log("------");

_yandere.each({ one: 1, two: 2, three: 3 }, console.log);

console.log("------");

_yandere.each("one", console.log);

console.log("------");

//for method map
var a = _yandere.map([1, 2, 3], console.log);
var b = _yandere.map({ one: 1, two: 2, three: 3 }, console.log);
var c = _yandere.map("123", console.log);
// console.log(a);
// console.log(b);
// console.log(c);