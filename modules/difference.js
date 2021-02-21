const { without } = require('./without.js');
const { flatten } = require('./flatten.js');

const difference = (array, ...arrays) => {
    let array1 = [array, ...arrays];
    return without(flatten(array1), ...flatten(arrays));
}
module.exports = {
    difference
}