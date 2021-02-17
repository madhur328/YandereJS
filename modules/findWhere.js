const findWhere = (list, properties) => {
    for (var i = 0; i < list.length; i++) {
        let values = Object.values(list[i]);
        let keys = Object.keys(list[i]);
        let propValues = Object.values(properties);
        let propKeys = Object.keys(properties);
        for (var k = 0; k < keys.length; k++) {
            for (var j = 0; j < propKeys.length; j++) {
                if (keys[k] === propKeys[j] && values[k] === propValues[j])
                    return list[i];
            }

        }
    }
}

module.exports = {
    findWhere
}

