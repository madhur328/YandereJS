const { isEqual } = require("./isEqual");

const isMatch = (obj, prop) => {
    if (typeof prop !== "object") { return true }
    else {
        propKeys = Object.keys(prop);
        for (var key of propKeys) {
            if (!isEqual(obj[key], prop[key])) {
                return false;
            }

        }
        return true
    }
}

module.exports = {
    isMatch
}