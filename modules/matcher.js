const { isMatch } = require('./isMatch.js');

const matcher = (attrs) => {
    return function (obj) {
        return isMatch(obj, attrs)
    }
}

module.exports = {
    matcher
}
// var a = matcher({ one: 1, two: 2 })
// console.log(a({ one: 1, two: 1 }))