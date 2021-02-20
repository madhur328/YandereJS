const first = (array, n) => {
    if (!n && n !== 0) { return array[0] }
    else {
        let result = array.splice(0, n);
        return result;
    }
}

module.exports = {
    first
}