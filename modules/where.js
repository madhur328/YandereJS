const where = (list, properties) => {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        let listArr = Object.entries(list[i]);
        let propArr = Object.entries(properties);
        for (var j = 0; j < propArr.length; j++) {
            for (var k = 0; k < listArr.length; k++) {
                if (propArr[j][0] === listArr[k][0] &&
                    propArr[j][1] === listArr[k][1]) { propArr.shift() }
                else if (k === listArr.length - 1) { break }
            }
        }
        if (propArr.length === 0) result.push(list[i]);
    }
    return result;
}

module.exports = {
    where
}
