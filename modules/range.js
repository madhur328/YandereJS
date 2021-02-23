const range = (start, stop, step = 1) => {
    var result = [];
    if (!stop) { stop = start; start = 0 }
    var length = Math.ceil((stop - start) / step);
    for (var i = 0; i < length; i++) {
        result.push(start);
        start += step;
    }
    return result;
}
module.exports = {
    range
}