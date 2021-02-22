const last = (array, n) => {
    if (!n && n !== 0) { return array[array.length - 1] }
    else {
        let result = array.splice(array.length - n, n);
        return result;
    }
}

module.exports = {
    last
}