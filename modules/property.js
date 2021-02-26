const { toPath } = require('./toPath.js');

const property = (path) => {
    return function (obj) {
        let result = obj;
        path = toPath(path);
        for (var arg of path) {
            result = result[arg]
        }
        return result;
    }
}

module.exports = {
    property
}

// var stooges = { moe: { fears: { worst: 'Spiders' } }, curly: { fears: { worst: 'Moe' } } };
// var curlysWorstFear = property(['curly', 'fears', 'worst']);
// console.log(curlysWorstFear(stooges));
//=> 'Moe'