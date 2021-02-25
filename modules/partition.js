const partition = (list, predicate) => {
    let items = Object.values(list);
    let result = [[], []];
    for (let item of items) {
        result[predicate(item) ? 0 : 1].push(item)
    }
    return result;
}

module.exports = {
    partition
}

//Test
let isOdd = num => num % 2 !== 0
let partition_output = partition([0, 1, 2, 3, 4, 5], isOdd);
console.log(partition_output)
