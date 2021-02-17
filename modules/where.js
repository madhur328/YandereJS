const where = (list, properties) => {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        let values = Object.values(list[i]);
        let keys = Object.keys(list[i]);
        let propValues = Object.values(properties);
        let propKeys = Object.keys(properties);
        for (var k = 0; k < keys.length; k++) {
            for (var j = 0; j < propKeys.length; j++) {
                if (keys[k] === propKeys[j] && values[k] === propValues[j])
                    result.push(list[i]);
            }

        }
    }
    return result;
}

module.exports = {
    where
}

var listOfPlays = [{ title: "Cymbeline", author: "Shakespeare", year: 1611 },
{ title: "The Tempest", author: "Shakespeare", year: 1611 }];
var even = where(listOfPlays, { title: "The Tempest", year: 1611 });
console.log(even);
