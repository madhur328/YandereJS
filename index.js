const { each } = require('./modules/each.js');
const { every } = require('./modules/every.js');
const { filter } = require('./modules/filter.js');
const { find } = require('./modules/find.js');
const { findWhere } = require('./modules/findWhere.js');
const { map } = require('./modules/map.js');
const { reduce } = require('./modules/reduce.js');
const { reduceRight } = require('./modules/reduceRight.js');
const { reject } = require('./modules/reject.js');
const { some } = require('./modules/some.js');
const { contains } = require('./modules/contains.js');


const _yandere = {
    each,
    every,
    map,
    filter,
    find,
    findWhere,
    map,
    reduce,
    reduceRight,
    reject,
    some,
    contains,
}

module.exports = _yandere;