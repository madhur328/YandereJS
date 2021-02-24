const omit = (obj, ...props) => {
    let result = {};
    if (typeof obj === "object") {
        let keys = Object.keys(obj);
        if (typeof props[0] === "string") {
            result = obj;
            for (var i = 0; i < props.length; i++) {
                if (typeof props[i] === "string" && props[i] in obj) {
                    delete result[props[i]];
                }
            }
        }
        else if (typeof props[0] === "function") {
            for (var j = 0; j < keys.length; j++) {
                if (!(props[0](obj[keys[j]]))) {
                    result[keys[j]] = obj[keys[j]]
                }
            }
        }
    }
    return result;
}
module.exports = {
    omit
}