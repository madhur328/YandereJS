const { without } = require('./without.js');
const { difference } = require('./difference.js');
const { flatten } = require('./flatten.js');

const intersection = (array1, ...arrays) => {
    return without(array1, ...difference(array1, ...arrays));
}
module.exports = {
    intersection
}