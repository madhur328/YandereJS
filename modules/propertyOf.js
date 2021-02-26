const { toPath } = require('./toPath.js');

const propertyOf = (obj) => {
    return function (path) {
        let result = obj;
        path = toPath(path);
        for (var arg of path) {
            result = result[arg]
        }
        return result;
    }
}

module.exports = {
    propertyOf
}

// var stooges = { moe: { fears: { worst: 'Spiders' } }, curly: { fears: { worst: 'Moe' } } };
// var curlysWorstFear = propertyOf(stooges);
// console.log(curlysWorstFear(['curly', 'fears', 'worst']));
// => 'Moe'