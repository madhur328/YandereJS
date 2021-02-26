const isEmpty = (collection) => {
    if (typeof collection === "object") {
        return Object.keys(collection).length === 0
    }
    else if (collection.length) {
        return false;
    }
    return true;
}
module.exports = {
    isEmpty
}