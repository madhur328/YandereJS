const { uniq } = require('./uniq.js');
const { flatten } = require('./flatten.js')

const union = (...arrays) => {
    return uniq(flatten(arrays));
}
module.exports = {
    union
}